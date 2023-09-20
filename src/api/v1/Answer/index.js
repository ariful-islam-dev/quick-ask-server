const createAnswer = require("./controllers/createAnswer.js");
const deleteAnswer = require("./controllers/deleteAnswer.js");
const findAllAnswer = require("./controllers/findAllAnswer.js");
const findAnswerByQuestion = require("./controllers/findAnswerByQuestion.js");
const findSingleAnswer = require("./controllers/findSingleAnswer.js");
const updateAnswer = require("./controllers/updateAnswer.js");


module.exports = {
    createAnswer, 
    findAnswerByQuestion,
    findAllAnswer,
    findSingleAnswer,
    updateAnswer,
    deleteAnswer
}

