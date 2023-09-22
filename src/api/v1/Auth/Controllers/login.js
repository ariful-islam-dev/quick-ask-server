const authService = require("../../../../lib/Auth/index.js");

const login = async(req, res, next) => {
    const {email, password}=req.body;

    try {
      const access_token = await authService.login(email, password)

    // generate response
    const response = {
      code: 200,
      message: "Login Successfully",
      data: {
        access_token
      },
      links: {
        self: "/auth/login"
      }
    }
    res.status(200).json(response);
    } catch (err) {
        next(err)
    }
  };

module.exports = login;