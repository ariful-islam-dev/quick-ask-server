const createQuestion = require("./Controllers/createQuestion.js");
const deleteQuestion = require("./Controllers/deleteQuestion.js");
const findAllQuestion = require("./Controllers/findAllQuestion.js");
const findSingleQuestion = require("./Controllers/findSingleQuestion.js");
const patchUpdateQuestion = require("./Controllers/patchUpdateQuestion.js");
const putUpdateQuestion = require("./Controllers/putUpdateQuestion.js");



module.exports = {
    findAllQuestion,
    createQuestion,
    findSingleQuestion,
    putUpdateQuestion,
    patchUpdateQuestion,
    deleteQuestion
}