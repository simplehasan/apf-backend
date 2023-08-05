import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: null,
    },
    nip: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "student"
    },
    remember_token: {
        type: String,
        default: uuidv4(),
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
        default: "",
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
    updated_at: {
        type: Date,
        default: new Date(),
    }
});

export default mongoose.model("User", User);