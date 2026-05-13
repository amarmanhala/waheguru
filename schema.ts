import { model, Schema } from "mongoose";
import type { User } from "./mock.js";

export const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    }
});

export const userModel = model<User>("User", userSchema);