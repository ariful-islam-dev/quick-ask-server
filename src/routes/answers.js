import answerControllers from "../api/v1/Answer/index.js";
import authentication from "../middlewares/Authentication.js";
import authorization from "../middlewares/Authorization.js";


const answerRouter = (router)=>{
    
    router.route("/answers").get(authentication, authorization(["admin"]), answerControllers.findAllAnswer)
    return router;
}

export default answerRouter;