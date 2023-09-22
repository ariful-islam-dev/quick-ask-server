const User = require("../../model/User.js");

const findUserByEmail = async(email)=>{
    const user = await User.findOne({email});
    return user ? user: false
};

module.exports = findUserByEmail;