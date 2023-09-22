const Question = require("../../model/Question.js");

const createQuestion =async(title, description, image="", status="public", author)=>{
   const question = await new Question({
        title, description, image:"", status:"public", author: author
    });
   await question.save();
   return {...question._doc, id: question.id}
};

module.exports =  createQuestion;