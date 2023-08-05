import mongoose from "mongoose";
import uuid from "uuid";

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
    role: {
        type: String,
        required: true,
        default: "student"
    },
    remember_token: {
        type: String,
        default: uuid.v4(),
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