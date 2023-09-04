import User from "../../../model/User.js";

const register = async (req, res) => {
    const { name, email, password } = req.body;
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

  }

  export default register;