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
    .delete(authentication, async(req, res, next)=>{
      res.status(204).json({
      code: 204,
      message: "Delete This question item"
  })
    });

  return router;
};

export default questionRoute;
