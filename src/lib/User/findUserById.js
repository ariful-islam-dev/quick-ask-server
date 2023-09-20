const User = require("../../model/User.js");

const findUserById = async(id)=>{
    const user = await User.findById(id).select("-password");

    return {...user._doc, id: user.id}
};

module.exports = findUserById;