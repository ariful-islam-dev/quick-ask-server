import { authorizationError } from "../utils/error";


const authorization = (roles=["admin"])=(req, _res, next)=>{
    if(roles.includes(req.user.role)){
        return next();
    }

    return next(authorizationError())
};

export default authorization;