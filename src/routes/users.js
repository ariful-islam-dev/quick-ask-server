import userController from "../api/v1/User/index.js";
import authentication from "../middlewares/Authentication.js";
import authorization from "../middlewares/Authorization.js";

const userRoute = (router) => {
  router
    .route("/users")
    .get(authentication, authorization(["admin"]), userController.findAllUser)
    .post(authentication, authorization(["admin"]), (req, res, next) => {
      res.status(201).json({
        code: 201,
        message: "Create a user Successful",
        data: {
          id: "user12344",
          name: "Abdullah Al Zarif",
          email: "zarif@gmail.com",
          avatar: "",
          role: "user",
          status: "public",
          link: "users/user123",
          createdAt: "2023-08-25T06:45:12.159Z",
          updatedAt: "2023-08-25T06:46:08.634Z",
        },
      });
    });
  return router;
};

export default userRoute;
