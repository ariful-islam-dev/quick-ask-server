import jwt from "jsonwebtoken";
import { serverError } from "../../utils/error.js";


const genJWTToken =(payload, secret=process.env.ACCESS_TOKEN_SECRETE, algorithm="HS256", expiresIn="1h")=>{
   try {
    return jwt.sign(payload, secret, {algorithm, expiresIn});

   } catch (error) {
    throw serverError(error.message);
   }
}

export default genJWTToken;