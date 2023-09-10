import createUser from "./createUser.js";
import existUser from "./existUser.js";
import findAllUser from "./findAllUser.js";
import findAuthorByQuestion from "./findAuthorByQuestion.js";


const userService = {createUser, existUser, findAuthorByQuestion, findAllUser}

export default userService;