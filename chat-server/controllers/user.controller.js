import User from "../models/user.model.js";
import getZodiacSign from "../utils/getZodiacSign.js";

// GET sidebar users
export const getUsersForSidebar = async (req, res) => {
    try {
        
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message)
        res.status(500).json({ error: "Internal server error"});
    }
}

// GET / view own profile
export const viewMyProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        res.status(200).json(user);
        
    } catch (error) {
        console.error("Error in viewMyProfile controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// PATCH / edit own profile
export const editProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const { fullName, gender, DOB, profilePic } = req.body;
        
        console.log("User editing profile:", userId);
        console.log("Fields received for update:", { fullName, gender, DOB, profilePic });

        const updateFields = { fullName, gender, DOB, profilePic };

        // update zodiac if DOB changed
        if (DOB) {
            const dobDate = new Date(DOB);
            const zodiacSign = getZodiacSign(dobDate.getMonth() + 1, dobDate.getDate());
            updateFields.zodiacSign = zodiacSign;
            console.log("DOB changed. New zodiac sign:", zodiacSign);
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateFields,
            { new: true, runValidators: true }
        ).select("-password");
        
        console.log("Profile updated successfully:", updatedUser);

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error in editProfile controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// GET / search for user by username or fullName
export const searchUser = async (req, res) => {
    try {
        const { query } = req.query;
        const loggedInUserId = req.user._id;

        if (!query) {
            return res.status(400).json({ error: "No search query provided." });
        }

        const users = await User.find({
            _id: { $ne: loggedInUserId },
            $or: [
                { username: { $regex: query, $options: "i" } },
                { fullName: { $regex: query, $options: "i" } }
            ]
        }).select("username fullName profilePic");

        res.status(200).json(users);

    } catch (error) {
        console.error("Error in searchUser controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// GET / view other users profile
export const viewProfile = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error in viewProfile controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
