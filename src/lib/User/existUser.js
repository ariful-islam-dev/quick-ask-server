const findUserByEmail = require("./findUserByEmail.js")


const existUser = async(email)=>{
  const user =  await findUserByEmail(email)
  return user ? true: false;
}

module.exports = existUser;