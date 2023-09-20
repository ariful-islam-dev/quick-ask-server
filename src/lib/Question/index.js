const count = require("./count.js");
const createQuestion = require("./createQuestion.js");
const deleteQuestion = require("./deleteQuestion.js");
const findAllQuestion = require("./findAllQuestion.js");
const findSingleQuestion = require("./findSingleQuestion.js");
const patchUpdateQuestion = require("./patchUpdateQuestion.js");
const putUpdateQuestion = require("./putUpdateQuestion.js");




module.expo = {
    findAllQuestion,
    count,
    createQuestion,
    findSingleQuestion, 
    putUpdateQuestion,
    patchUpdateQuestion,
    deleteQuestion
}