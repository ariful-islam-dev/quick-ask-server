const userService = require("../../../../lib/User/index.js");

const deleteUser = async(req, res, next)=>{
    const id = req.params.id;

    try {
        
        await userService.deleteUser(id)

        res.status(204).json({message: "Delete Succesfully"})
    } catch (error) {
       next(error) 
    }
}

module.exports = deleteUser;