import User from '../model/User.js';
const authRoute = (router) => {
  // Register User
  router.route("/auth/register").post(async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body)


    try {
      const user = await new User({
        name: name,
        email: email,
        password: password,
      });
      await user.save();


      res.status(201).json(user);
    } catch (err) {
        throw badRequest(err.message);
    }

    // res.status(201).json({
    //   message: "Create a account successfully",
    //   // user,
    // });
  });

  // Login User
  router.route("/auth/login").post((req, res, next) => {
    res.status(200).json({
      message: "Login Successfully",
    });
  });
  return router;
};

export default authRoute;
