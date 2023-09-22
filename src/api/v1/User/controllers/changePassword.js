const User = require("../../../../model/User");
const { hashing } = require("../../../../utils/hashing");

const changePassword = async(req, res, next)=>{
  const id = req.params.id;
  const password = req.body.password;
  try {
    const user = await User.findById(id);
    if(!user){
      throw notFound("User not found")
    }


    // new password hash
    const hashPass = await hashing(password, 10);
    user.password = hashPass;
    await user.save()
    res.status(200).json({
      code: 200,
      message: "Change user password successfully",
      data: user
    })
  } catch (error) {
    next(error)
  }
}


module.exports = changePassword;