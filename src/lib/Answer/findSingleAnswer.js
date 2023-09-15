import Answer from "../../model/Answer.js";

const findSingleAnswer = async(id)=>{
    const answer = await Answer.findById(id); 
    return {...answer._doc, id: answer.id}
};

export default findSingleAnswer;