import createQuestion from "./Controllers/createQuestion.js";
import deleteQuestion from "./Controllers/deleteQuestion.js";
import findAllQuestion from "./Controllers/findAllQuestion.js";
import findSingleQuestion from "./Controllers/findSingleQuestion.js";
import patchUpdateQuestion from "./Controllers/patchUpdateQuestion.js";
import putUpdateQuestion from "./Controllers/putUpdateQuestion.js";

const questionController = {
    findAllQuestion,
    createQuestion,
    findSingleQuestion, 
    putUpdateQuestion,
    patchUpdateQuestion,
    deleteQuestion
}

export default questionController;