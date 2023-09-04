

const answerRouter = (router)=>{
    
    router.route("/answers").get((req, res)=>{
      res.status(200).json({
        message: "Retrive all answers"
      })  
    })
    return router;
}

export default answerRouter;