const express = require("express");
const answerRouter = require("./answers.js");
const authRoute = require("./auth.js");
const questionRoute = require("./questions.js");
const userRoute = require("./users.js");

const router = express.Router();

authRoute(router);
userRoute(router);
questionRoute(router);
answerRouter(router);

module.exports = router;
