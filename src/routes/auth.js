import authController from "../api/v1/Auth/index.js";
const authRoute = (router) => {
  // Register User
  router.route("/auth/register").post(authController.register);

  // Login User
  router.route("/auth/login").post(authController.login);

  // return the imported router
  return router;
};

export default authRoute;
