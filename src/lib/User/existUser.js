import findUserByEmail from "./findUserByEmail.js";


const existUser = async(email)=>{
  const user =  await findUserByEmail(email)
  return user ? true: false;
}

export default existUser;