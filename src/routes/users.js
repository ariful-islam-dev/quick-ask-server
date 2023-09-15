import userController from "../api/v1/User/index.js";
import authentication from "../middlewares/Authentication.js";
import authorization from "../middlewares/Authorization.js";
import User from "../model/User.js";
import { notFound } from "../utils/error.js";
import { hashing } from "../utils/hashing.js";

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

  router.route("/users/:id/password").patch(authentication, authorization(["admin"]), async(req, res, next)=>{
    const id = req.params.id;
    const password = req.body.password;
    try {
      const user = await User.findById(id);
      if(!user){
        throw notFound("User not found")
      }
      
      
      // new password hash
      const hashPass = await hashing(password, 10);
      user.password = hashPass;
      await user.save()
      res.status(200).json({
        code: 200,
        message: "Change user password successfully",
        data: user
      })
    } catch (error) {
      next(error)
    }
  })


  return router;
};

export default userRoute;
