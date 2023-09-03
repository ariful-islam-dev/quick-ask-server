import express from "express";
import answerRouter from "./answers.js";
import authRoute from './auth.js';
import questionRoute from "./questions.js";
import userRoute from "./users.js";

const router = express.Router();

authRoute(router);
userRoute(router)
questionRoute(router);
answerRouter(router)



export default router;
