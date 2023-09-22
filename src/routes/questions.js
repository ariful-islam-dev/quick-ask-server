const questionController = require("../api/v1/Question/index.js");

const answerControllers = require("../api/v1/Answer/index.js");
const userController = require("../api/v1/User/index.js");
const authentication = require("../middlewares/Authentication.js");
const authorization = require("../middlewares/Authorization.js");
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

  router.route("/questions/:id/author").get(userController.findAuthorByQuestion);

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

module.exports= questionRoute;


