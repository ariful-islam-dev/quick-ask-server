import Answer from "../../model/Answer.js";

const findAllAnswer = async(questionId)=>{
    if(!questionId){
        const answer = await Answer.find();
        return answer;
    };

    const answers = await Answer.find({question: questionId}).populate({path: "question", select: "title description"}).select("-__v");
    
    return answers

};

export default findAllAnswer;