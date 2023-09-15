import answerControllers from "../api/v1/Answer/index.js";
import authentication from "../middlewares/Authentication.js";
import authorization from "../middlewares/Authorization.js";

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

export default answerRouter;
