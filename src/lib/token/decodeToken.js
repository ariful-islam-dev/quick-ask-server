

const jwt = require("jsonwebtoken");
const { serverError } = require("../../utils/error.js");

const decodeToken = (token, algorithm="HS256")=>{
    try {
        return jwt.decode(token, {algorithm:[algorithm]})
    } catch (error) {
        throw serverError(error.message);
    }
};

module.exports = decodeToken;