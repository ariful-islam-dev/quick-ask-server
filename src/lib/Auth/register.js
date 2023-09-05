import { badRequest } from "../../utils/error.js";
import { hashing } from "../../utils/hashing.js";
import userService from "../User/index.js";

const register = async(name, email, password, status = "public", role = "user") => {
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

export default register;
