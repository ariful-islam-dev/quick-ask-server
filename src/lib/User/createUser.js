import User from "../../model/User.js";

const createUser = async (
  name,
  email,
  password,
  role,
  status 
) => {
  const user = await new User({
    name,
    email,
    password,
    role,
    status,
  });
  await user.save();

  return { ...user._doc, id: user.id };
};

export default createUser;
