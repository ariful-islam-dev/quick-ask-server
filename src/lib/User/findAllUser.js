const User = require("../../model/User.js");

const findAllUser = async(page, limit, sortBy, sortType, search)=>{
   // sort 
   const sortStr = `${sortType === "dsc"? "-": ""}${sortBy}`;
   const filter = {
    name: {$regex: search, $options: "i"}
   }
    const users = await User.find(filter).select("-__v -password").sort(sortStr).skip(page*limit-limit).limit(limit);
    return users.map(user=>({...user._doc, id: user.id}))
}

module.exports = findAllUser