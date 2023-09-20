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

module.exports= userRoute;
