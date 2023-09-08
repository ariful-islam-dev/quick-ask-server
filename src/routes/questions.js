import questionController from "../api/v1/Question/index.js";

import answerControllers from "../api/v1/Answer/index.js";
import authentication from "../middlewares/Authentication.js";
import authorization from "../middlewares/Authorization.js";
import Question from "../model/Question.js";
import User from "../model/User.js";
const questionRoute = (router) => {
  router
    .route("/questions")
    .get(questionController.findAllQuestion)
    .post(authentication, questionController.createQuestion);

  router
    .route("/questions/:id")
    .get(questionController.findSingleQuestion)
    .put(
      authentication,
      authorization(["user", "admin"]),
      questionController.putUpdateQuestion
    )
    .patch(
      authentication,
      authorization(["user", "admin"]),
      questionController.patchUpdateQuestion
    )
    .delete(
      authentication,
      authorization(["user", "admin"]),
      questionController.deleteQuestion
    );

  router
    .route("/questions/:id/answers")
    .get(answerControllers.findAnswerByQuestion)
    .post(
      authentication,
      authorization(["user", "admin"]),
      answerControllers.createAnswer
    );

  router.route("/questions/:id/author").get(async (req, res, next) => {
    const id = req.params.id;
    try {
      const question = await Question.findById(id);
      const author = await User.findById(question.author);
      res.status(200).json({
        code: 200,
        message: "Your Question's Author",
        data: author
      });
    } catch (error) {
      next(error);
    }
  });

  //for experiment

  router.route("/questions/upload").post((req, res, next) => {
    console.log(req.body);
    console.log(req.files[0]);
    res.status(200).json({
      message: "Upload",
    });
  });

  return router;
};

export default questionRoute;
