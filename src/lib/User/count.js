const User = require("../../model/User.js");

const count = async(search="")=>{
    const filter = {
        name: {$regex: search, $options: "i"}
    }
    return User.count(filter);

};

module.exports =  count;