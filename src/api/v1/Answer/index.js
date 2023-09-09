import createAnswer from "./controllers/createAnswer.js";
import findAllAnswer from "./controllers/findAllAnswer.js";
import findAnswerByQuestion from "./controllers/findAnswerByQuestion.js";
import findSingleAnswer from "./controllers/findSingleAnswer.js";
import updateAnswer from "./controllers/updateAnswer.js";
const answerControllers = {
    createAnswer, 
    findAnswerByQuestion,
    findAllAnswer,
    findSingleAnswer,
    updateAnswer
}

export default answerControllers;

