import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^\S+@\S+\.\S+$/
        },
        password: {
            type: String,
            required: true,
            minLength: 8
        },
        memories: {
            type: Array
        }
    }
)

export const User = mongoose.model("User", UserSchema)