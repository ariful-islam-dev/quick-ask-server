import questionController from "../api/v1/Question/index.js";

import authentication from "../middlewares/Authentication.js";

const questionRoute = (router) => {
  router
    .route("/questions")
    .get(questionController.findAllQuestion)
    .post(authentication, questionController.createQuestion);

  return router;
};

export default questionRoute;
