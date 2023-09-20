const User = require("../../model/User.js");
const { badRequest } = require("../../utils/error.js");
const { hashing } = require("../../utils/hashing.js");
const userService = require("../User/index.js");

const register = async(name, email, password, status = "public", role = "user") => {

  const users = await User.find();

    if(users.length === 0){
      role="admin"
    }
  
  const hasUser = userService.existUser(email);
  if (!hasUser) {
    throw badRequest("User Already exist");
  }

  // hash Password
  const hashPassword = await hashing(password, 10);

  const user = await userService.createUser(
    name,
    email,
    (password = hashPassword),
    role,
    status
  );
  return user;
};

module.exports= register;
