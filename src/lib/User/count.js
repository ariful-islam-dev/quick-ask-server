import User from "../../model/User.js";

const count = async(search="")=>{
    const filter = {
        title: {$regex: search, $options: "i"}
    }
    return User.count(filter);

};

export default count;