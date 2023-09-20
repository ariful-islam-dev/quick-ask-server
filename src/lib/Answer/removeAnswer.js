const Answer = require("../../model/Answer.js");
const { authorizationError, notFound } = require("../../utils/error.js");

const removeAnswer = async(id, user)=>{
    const answer = await Answer.findById(id);
    if(!answer){
        throw notFound("Answer not exist")
    };

    if(user.role === "admin" ){
        return Answer.findByIdAndDelete(id)
    }
    
    if(answer.status === "approved" ){
        throw authorizationError("Permission Denied, Because your answer is approved ");
    };

   

    return Answer.findByIdAndDelete(id)
}

module.exports= removeAnswer;