const jwt = require("jsonwebtoken");
const { serverError } = require("../../utils/error.js");

const verifyToken = (token, secret=process.env.ACCESS_TOKEN_SECRETE, algorithm="HS256")=>{
    try {
        return jwt.verify(token, secret, {algorithm: [algorithm]})
    } catch (error) {
        throw serverError(error.message);
    }
};

module.exports = verifyToken;