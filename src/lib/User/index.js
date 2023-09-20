const count = require('./count.js');
const createUser = require("./createUser.js");
const deleteUser = require('./deleteUser.js');
const existUser = require("./existUser.js");
const findAllUser = require("./findAllUser.js");
const findAuthorByQuestion = require("./findAuthorByQuestion.js");
const findUserById = require('./findUserById.js');
const updateUser = require('./updateUser.js');



module.exports = {
   createUser,
   existUser, findAuthorByQuestion,
   findAllUser, count, findUserById, updateUser, deleteUser
  }