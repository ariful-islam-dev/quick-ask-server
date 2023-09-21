const express = require("express");
const answerRouter = require("./answers.js");
const authRoute = require("./auth.js");
const questionRoute = require("./questions.js");
const userRoute = require("./users.js");

const router = (app)=>{
    
   return authRoute(app);
    // userRoute(app);
    // questionRoute(app);
    // answerRouter(app);
   
}

module.exports = router;
