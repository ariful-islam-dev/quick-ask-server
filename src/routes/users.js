import User from "../model/User.js";


const userRoute = (router)=>{

    router.route("/users").get(async(req, res)=>{

        try {
            const user = await User.find({});
            
            res.status(200).json({
                message: "GET All User",
                user
            })
        } catch (error) {
            console.log(error)
        }
        
    })
    return router;
}

export default userRoute;