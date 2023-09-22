const Answer = require("../../model/Answer.js");

const createAnswer = async(body, status="draft", questionId, authorId)=>{
    const answer = await new Answer({body, status, question: questionId, author: authorId});
    await answer.save();
    return {...answer._doc, id: answer.id};
}

module.exports = createAnswer;