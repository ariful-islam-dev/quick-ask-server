import User from "../../model/User.js";

const createUser = async (
  name,
  email,
  password,
  role="user",
  status="public" ,
  avatar=""
) => {
  const user = await new User({
    name,
    email,
    password,
    role,
    status,
    avatar
  });
  await user.save();

  return { ...user._doc, id: user.id };
};

export default createUser;
