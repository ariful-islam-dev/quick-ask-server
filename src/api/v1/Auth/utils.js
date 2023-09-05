
import jwt from "jsonwebtoken";


const genJWTToken =async(payload, secret=process.env.ACCESS_TOKEN_SECRETE)=>{
    const token = await jwt.sign(payload, secret);
    return token
}

export { genJWTToken };
