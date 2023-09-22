const { Schema, model } = require("mongoose");


const answerSchema = new Schema({
    body: {
        type: String,
        require: ["Input Your Opinions"]
    },
    status: {
        type: String,
        enum: ["draft", "approved"],
        default: "draft"
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    question:{
        type: Schema.Types.ObjectId,
        ref: "Question"
    }
}, {timestamps: true, autoIndex: false});

const Answer = model("Answer", answerSchema);

module.exports= Answer;