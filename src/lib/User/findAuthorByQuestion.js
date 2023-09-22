const Question = require("../../model/Question.js");
const User = require("../../model/User.js");
const { notFound } = require("../../utils/error.js");

const findAuthorByQuestion = async(questionId)=>{
    const question = await Question.findById(questionId);

    if(!question) throw notFound("Question not exist");

    const author = await User.findById(question.author);

    return {...author._doc, id:author.id};
}

module.exports = findAuthorByQuestion;