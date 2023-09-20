const Question = require("../../model/Question.js");
const createQuestion = require("./createQuestion.js");

const putUpdateQuestion = async(id,{title, description, image="", status="public", author})=>{

    const question = await Question.findById(id);
    if(!question){
       const question = await createQuestion(title, description, image, status, author);
   
       return { question, code: 201 };
    }

    const payload = {
        title, 
        description,
        image, 
        status,
        author
    }
   await question.overwrite(payload);

    question.save();

    return { question: { ...question._doc, id: question.id }, code: 200 };

}

module.exports = putUpdateQuestion;