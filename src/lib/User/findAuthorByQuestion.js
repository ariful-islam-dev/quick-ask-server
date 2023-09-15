import Question from "../../model/Question.js";
import User from "../../model/User.js";
import { notFound } from "../../utils/error.js";

const findAuthorByQuestion = async(questionId)=>{
    const question = await Question.findById(questionId);

    if(!question) throw notFound("Question not exist");

    const author = await User.findById(question.author);

    return {...author._doc, id:author.id};
}

export default findAuthorByQuestion;