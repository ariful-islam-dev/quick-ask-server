const jwt = require("jsonwebtoken");
const { serverError } = require("../../utils/error.js");


const genJWTToken =(payload, secret=process.env.ACCESS_TOKEN_SECRETE, algorithm="HS256", expiresIn="1h")=>{
   try {
    return jwt.sign(payload, secret, {algorithm, expiresIn});

   } catch (error) {
    throw serverError(error.message);
   }
}

module.exports= genJWTToken;