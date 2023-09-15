import createUser from "./controllers/createUser.js";
import deleteUser from "./controllers/deleteUser.js";
import findAllUser from "./controllers/findAllUser.js";
import findAuthorByQuestion from "./controllers/findAuthorByQuestion.js";
import findUserById from "./controllers/findUserById.js";
import updateUser from "./controllers/upateUser.js";


const userController = {findAuthorByQuestion, findAllUser, createUser, findUserById, updateUser, deleteUser};

export default userController;