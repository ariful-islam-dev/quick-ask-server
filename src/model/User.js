import { Schema, model } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        maxLength: 30,
        minLength: 10,
        required: ["Name is require"]
    },
    email:{
        type: String,
        unique: true, 
        required: ["Email is require"],
        index: true
    },
    password:{
        type: String,
        minLength: 6,
        required: ["Password is require"]
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    status: {
        type: String,
        enum: ["public", "private"],
        default: "public"
    }

},{timestamps: true, autoIndex: false, });

const User = model("User", userSchema);

export default User;
