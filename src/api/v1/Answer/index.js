import createAnswer from "./controllers/createAnswer.js";
import findAllAnswer from "./controllers/findAllAnswer.js";
import findAnswerByQuestion from "./controllers/findAnswerByQuestion.js";
const answerControllers = {
    createAnswer, 
    findAnswerByQuestion,
    findAllAnswer
}

export default answerControllers;