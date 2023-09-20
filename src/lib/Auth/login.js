
const { badRequest } = require("../../utils/error.js");
const { matchHashing } = require("../../utils/hashing.js");
const findUserByEmail = require("../User/findUserByEmail.js");
const token = require("../token/index.js");

const login = async(email, password)=>{
     //find user
     const user = await findUserByEmail(email);
     
     if(!user){
       throw badRequest("Invalid Credential")
     }
     //match password
     const matchPassword = await matchHashing(password, user.password);
     if(!matchPassword){
       throw badRequest("Invalid Credential")
     }
     //generate access_token
     const payload = {
       id: user.id,
       name: user.name,
       email: user.email,
       role: user.role,
       status: user.status
     }
     return token.genJWTToken(payload)
}

module.exports = login