const userController = require("../api/v1/User/index.js");
const authentication = require("../middlewares/Authentication.js");
const authorization = require("../middlewares/Authorization.js");
const User = require("../model/User.js");
const { notFound } = require("../utils/error.js");
const { hashing } = require("../utils/hashing.js");

const userRoute = (router) => {
  router
    .route("/users")
    .get(authentication, authorization(["admin"]), userController.findAllUser)
    .post(authentication, authorization(["admin"]), userController.createUser);

  router
    .route("/users/:id")
    .get(authentication, authorization(["admin"]), userController.findUserById)
    .patch(authentication, authorization(["admin"]), userController.updateUser)
    .delete(authentication, authorization(["admin"]), userController.deleteUser)

  router.route("/users/:id/password").patch(authentication, authorization(["admin"]), userController.changePassword)


  return router;
};

module.exports= userRoute;
