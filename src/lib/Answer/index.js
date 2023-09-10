import count from "./count.js";
import createAnswer from "./createAnswer.js";
import findAllAnswer from "./findAllAnswer.js";
import findSingleAnswer from "./findSingleAnswer.js";
import removeAnswer from "./removeAnswer.js";
import updateAnswer from "./updateAnswer.js";
const answerService = {
    createAnswer,
    findAllAnswer, 
    count,
    findSingleAnswer,
    updateAnswer,
    removeAnswer
};

export default answerService;