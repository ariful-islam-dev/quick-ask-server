const User = require("../../model/User.js");
const { notFound } = require("../../utils/error.js");

const findUserById = async(id)=>{

    const user = await User.findById(id).select("-password");

    if(!user){
        throw notFound("User not exist")
    }

    return {...user._doc, id: user.id}
};

module.exports = findUserById;