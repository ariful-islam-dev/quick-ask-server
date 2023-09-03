

const authRoute = (router)=>{
    // Authentication route
router.route("/auth/register").post((req, res, next)=>{
    res.status(201).json({
        message: "Create a account successfully"
    })
})
router.route("/auth/login").post((req, res, next)=>{
    res.status(200).json({
        message: "Login Successfully"
    })
})
return router;
}


export default authRoute;
