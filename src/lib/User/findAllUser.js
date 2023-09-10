import User from "../../model/User.js";

const findAllUser = async()=>{
    const users = await User.find();
    return users
}

export default findAllUser