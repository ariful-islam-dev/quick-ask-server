import Question from "../../model/Question.js";
import { notFound } from "../../utils/error.js";

const patchUpdateQuestion = async(id, {title, description, image, status}, user)=>{
    const question = await Question.findById(id);
    if(!question){
        throw notFound("Question Not Found")
    }

    question.title = title ?? question.title;
    question.description = description?? question.description;
    question.image = image?? question.image;
    if(user.role === "admin"){
        question.status = status ?? question.status;
    }

    await question.save();

    return {...question._doc, id: question.id};
};

export default patchUpdateQuestion;

