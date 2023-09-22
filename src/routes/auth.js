const authController = require("../api/v1/Auth");
const authRoute = (app) => {
  // Register User
  app.post("/auth/register",authController.register)
  


  // Login User
  app.post("/auth/login", authController.login);

  // return the imported router
  return app;
};

module.exports= authRoute;
