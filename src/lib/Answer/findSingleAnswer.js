const Answer = require("../../model/Answer.js");

const findSingleAnswer = async(id)=>{
    const answer = await Answer.findById(id); 
    return {...answer._doc, id: answer.id}
};

module.exports = findSingleAnswer;