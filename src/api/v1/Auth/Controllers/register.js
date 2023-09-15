import authService from "../../../../lib/Auth/index.js";
import token from "../../../../lib/token/index.js";



const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = await authService.register(name, email, password);

    // generate Token
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    };
    const access_Token = await token.genJWTToken(payload);

    const response = {
      code: 201,
      message: "Register Successfully",
      data: {
         access_Token
      },
      links: {
        self: "/auth/register",
        login: "/auth/login"
      }
    }
    

    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};

export default register;
