
import { badRequest } from "../../utils/error.js";
import { matchHashing } from "../../utils/hashing.js";
import findUserByEmail from "../User/findUserByEmail.js";
import token from "../token/index.js";

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

export default login