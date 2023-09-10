import userController from "../api/v1/User/index.js";
import authentication from "../middlewares/Authentication.js";
import authorization from "../middlewares/Authorization.js";


const userRoute = (router)=>{

    router.route("/users").get(authentication, authorization(["admin"]), userController.findAllUser)
    return router;
}

export default userRoute;