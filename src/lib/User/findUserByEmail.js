import User from "../../model/User.js";

const findUserByEmail = async(email)=>{
    const user = await User.findOne({email});
    return user ? user: false
};

export default findUserByEmail;