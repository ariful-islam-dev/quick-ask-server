const Answer = require("../../model/Answer.js");
const { notFound } = require("../../utils/error.js");

const updateAnswer = async(id, {body, status}, user)=>{
    const answer = await Answer.findById(id);
    if(!answer){
        throw notFound("Answer Not found")
    };
    
    answer.body = body ?? answer.body;

    if(user.role === "admin"){
        answer.status = status?? answer.status;
    }

    await answer.save();

    return {...answer._doc, id: answer.id}

};

module.exports= updateAnswer;