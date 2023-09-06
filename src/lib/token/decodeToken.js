

import jwt from "jsonwebtoken";
import { serverError } from "../../utils/error.js";

const decodeToken = (token, algorithm="HS256")=>{
    try {
        return jwt.decode(token, {algorithm:[algorithm]})
    } catch (error) {
        throw serverError(error.message);
    }
};

export default decodeToken;