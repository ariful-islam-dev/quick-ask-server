import User from "../../model/User.js";

const findAllUser = async(page, limit, sortBy, sortType, search)=>{
   // sort 
   const sortStr = `${sortType === "dsc"? "-": ""}${sortBy}`;
   const filter = {
    name: {$regex: search, $options: "i"}
   }
    const users = await User.find(filter).select("-__v").sort(sortStr).skip(page*limit-limit).limit(limit);
    return users.map(user=>({...user._doc, id: user.id}))
}

export default findAllUser