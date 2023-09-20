const Question = require("../../model/Question.js");

const count = async(search="")=>{
    const filter = {
        title: {$regex: search, $options: "i"}
    }
    return Question.count(filter);

};

module.exports= count;