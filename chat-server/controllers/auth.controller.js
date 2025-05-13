import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import getZodiacSign from "../utils/getZodiacSign.js";

// POST / signup
export const signup = async (req, res) => {
    try {
        console.log("Received body:", req.body);

        // define inputs
        const {fullName, username, email, password, confirmPassword, DOB, gender} = req.body;

        // force username and email to lowercase
        const normalizedUsername = username.toLowerCase();
        const normalizedEmail = email.toLowerCase();

        // check if username or email exist
        const existingUser = await User.findOne({ username: normalizedUsername });
        const existingEmail = await User.findOne({ email: normalizedEmail });

        if(existingUser) {
            return res.status(400).json({error:"Username already exists"})
        }

        if(existingEmail) {
            return res.status(400).json({error:"Email already in use"})
        }
        
        // check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passwords do not match."})
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // set zodiac signs
        const dobDate = new Date(DOB);
        const zodiacSign = getZodiacSign(dobDate.getMonth() + 1, dobDate.getDate());

        // set profile picture based on username
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        // create new user
        const newUser = new User({
            fullName,
            username,
            email, 
            password: hashedPassword,
            gender,
            DOB,
            zodiacSign,
            // determine profile pic link based on gender
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            // generate JWT token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                zodiacSign: newUser.zodiacSign,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

    }
    catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({ error: error.message || "Internal Server Error" })
    }
};

// POST / login
export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Incorrect username or password."})
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    }
    catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({error: "Internal Sever Error"})
    }
}

// POST / logout
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully." });
    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({error: "Internal Sever Error"})
    }
}

// PATCH / change password
export const changePass = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const userId = req.user._id;

        // find user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        // check current password 
        const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Current password is incorrect." });
        }

        // hash new password 
        const salt = await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedNewPassword;
        await user.save();

        res.status(200).json({ message: "Password changed successfully." });
    }
    catch (error) {
        console.log("Error in changePass controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// DELETE own account
export const deleteAcc = async (req, res) => {
    try {
        const { password, confirmPassword } = req.body;
        const userId = req.user._id;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match." });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Incorrect password." });
        }

        await User.findByIdAndDelete(userId);

        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Account deleted successfully." });
    }
    catch (error) {
        console.log("Error in deleteAcc controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

