

const questionRoute = (router)=>{
    router.route("/questions").get((req, res)=>{
        res.status(200).json({
            message: "Get All Question"
        })
    }).post((req, res)=>{
        res.status(201).json({
            message: "Post a question"
        })
    })

    return router;
}

export default questionRoute;