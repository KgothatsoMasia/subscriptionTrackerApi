import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name required"],
        trim: true,
        minLenght: 2,
        maxlength: 50
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },

    password: {
        type: String,
        required: [true, "User password is required"],
        minLenght: 6
    }
},
{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;