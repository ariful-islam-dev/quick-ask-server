import questionController from "../api/v1/Question/index.js";

import authentication from "../middlewares/Authentication.js";

const questionRoute = (router) => {
  router
    .route("/questions")
    .get(questionController.findAllQuestion)
    .post(authentication, questionController.createQuestion);

  router
    .route("/questions/:id")
    .get(questionController.findSingleQuestion)
    .put(authentication, questionController.putUpdateQuestion )
    .patch(authentication, questionController.patchUpdateQuestion)
    .delete(authentication, questionController.deleteQuestion);

  return router;
};

export default questionRoute;
