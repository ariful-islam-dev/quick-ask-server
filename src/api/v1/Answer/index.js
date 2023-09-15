import createAnswer from "./controllers/createAnswer.js";
import deleteAnswer from "./controllers/deleteAnswer.js";
import findAllAnswer from "./controllers/findAllAnswer.js";
import findAnswerByQuestion from "./controllers/findAnswerByQuestion.js";
import findSingleAnswer from "./controllers/findSingleAnswer.js";
import updateAnswer from "./controllers/updateAnswer.js";
const answerControllers = {
    createAnswer, 
    findAnswerByQuestion,
    findAllAnswer,
    findSingleAnswer,
    updateAnswer,
    deleteAnswer
}

export default answerControllers;

