const answerControllers = require("../api/v1/Answer/index.js");
const authentication = require("../middlewares/Authentication.js");
const authorization = require("../middlewares/Authorization.js");

const answerRouter = (router) => {
  router
    .route("/answers")
    .get(
      authentication,
      authorization(["admin"]),
      answerControllers.findAllAnswer
    )
    .post(
      authentication,
      authorization(["admin"]),
      answerControllers.createAnswer
    );
  router
    .route("/answers/:id")
    .get(
      authentication,
      authorization(["user", "admin"]),
      answerControllers.findSingleAnswer
    )
    .patch(
      authentication,
      authorization(["user", "admin"]),
      answerControllers.updateAnswer
    )
    .delete(
      authentication,
      authorization(["user", "admin"]),
     answerControllers.deleteAnswer
    );

  return router;
};

module.exports= answerRouter;
