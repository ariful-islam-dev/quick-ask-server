import count from './count.js';
import createUser from "./createUser.js";
import deleteUser from './deleteUser.js';
import existUser from "./existUser.js";
import findAllUser from "./findAllUser.js";
import findAuthorByQuestion from "./findAuthorByQuestion.js";
import findUserById from './findUserById.js';
import updateUser from './updateUser.js';


const userService = {
    createUser,
    existUser, findAuthorByQuestion,
    findAllUser, count, findUserById, updateUser, deleteUser
}

export default userService;