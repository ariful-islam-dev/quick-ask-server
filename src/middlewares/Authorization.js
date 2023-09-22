const { authorizationError } = require("../utils/error.js");


const authorization = (roles=["admin"])=>(req, _res, next)=>{
    if(roles.includes(req.user.role)){
        return next();
    }

    return next(authorizationError())
};

module.exports =authorization;