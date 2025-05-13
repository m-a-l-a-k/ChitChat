import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
          ],          
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    DOB: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                const today = new Date();
                const thirteenYearsAgo = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
                return value <= thirteenYearsAgo;
            },
            message: props => "You must be at least 13 years old to use ChitChat."
        }
    },
    zodiacSign: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: [ "female", "male", "other"]
    },
    profilePic: {
        type: String,
        default: "",
    }
    // member since: <createdAt>
}, { timestamps: true });



export default mongoose.model("User", userSchema);