import { Schema, model } from "mongoose";


const questionSchema = new Schema({
    title: {
        type: String,
        require: ["Title is require"]
    },
    description:{
        type: String,
        require: ["Description is require"]
    },
    image: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["public", "private"],
        default: "public"
    }

}, {timestamps: true, authIndex: false});

const Question = model("Question", questionSchema);

export default Question;