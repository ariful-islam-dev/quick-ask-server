import Answer from "../../model/Answer.js";
import Question from "../../model/Question.js";
import User from "../../model/User.js";

const deleteUser = async(id)=>{
    const user = await User.findById(id);
    if(!user){
        throw notFound("User Not found");
    }

    const questions = await Question.find({"author": user._id});

    if(questions.length >0){
        questions.map(question=>{
             return Question.findByIdAndDelete(question._id)
        })
    }

    const answers = await Answer.find({"author": user._id});

    if(answers.length > 0){
        answers.map(answer=>{
            return Answer.findByIdAndDelete(answer._id);
        })
    }

    return User.findByIdAndDelete(id);
}

export default deleteUser;