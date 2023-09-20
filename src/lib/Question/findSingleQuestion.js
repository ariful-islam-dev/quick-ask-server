const Question = require("../../model/Question.js");
const { badRequest, notFound } = require("../../utils/error.js");

const findSingleQuestion = async(id, expand="" )=>{
    if(!id) throw badRequest("id is require");
    // if expand
    expand = expand.split(",").map(item=>item.trim())
    //find question from database
    const question = await Question.findById(id).select("-__v");
    if(!question){
        throw notFound("Question Not Found")
    }

    if(expand.includes("author")){
        await question.populate({
            path: "author",
            select: "name",
            strictPopulate: false
        })
    }

    if(expand.includes("answer") || expand.includes("answers")){
        await question.populate({
            path: "answer",
            select: "name",
            strictPopulate: false
        })
    }

    const data = {
        ...question._doc,     
        id: question.id,
        link: `/questions/${id}`
    }

    return data
};

module.exports = findSingleQuestion;