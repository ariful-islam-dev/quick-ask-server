const createUser = require("./controllers/createUser.js");
const deleteUser = require("./controllers/deleteUser.js");
const findAllUser = require("./controllers/findAllUser.js");
const findAuthorByQuestion = require("./controllers/findAuthorByQuestion.js");
const findUserById = require("./controllers/findUserById.js");
const updateUser = require("./controllers/upateUser.js");
const changePassword = require("./controllers/changePassword.js")




module.exports = { findAuthorByQuestion, findAllUser, createUser, findUserById, updateUser, deleteUser, changePassword }