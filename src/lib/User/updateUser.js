const User = require("../../model/User.js");


const updateUser = async(id, {name, role, status, avatar})=>{
    const user = await User.findById(id).select("-password");
    if (!user) {
      throw notFound("User Not Found")
    }

    user.name = name ?? user.name;
    user.role = role ?? user.role;
    user.status = status ?? user.status;
    user.avatar = avatar ?? user.avatar;

    await user.save();

    return {...user._doc, id: user.id };
}
module.exports = updateUser;