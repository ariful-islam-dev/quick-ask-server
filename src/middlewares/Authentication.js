const findUserByEmail = require("../lib/User/findUserByEmail.js");
const token = require("../lib/token/index.js");
const { authenticationError } = require("../utils/error.js");

const authentication = async (req, _res, next) => {
  const userToken = req.headers.authorization.split(" ")[1];
  

  try {
    // verify token
    const verify = await token.verifyToken(userToken);
    // get user info using email
    const user = await findUserByEmail(verify.email);
    if (!user) {
      next(authenticationError());
    }
    // Check user status
    if (user.status !== "public") {
      next(authenticationError(`Your account is ${user.status}`));
    }
    // return user
    req.user = { ...user._doc, id: user.id };
    next();
  } catch (error) {
    next(authenticationError(error.message))
  }
};

module.exports = authentication;