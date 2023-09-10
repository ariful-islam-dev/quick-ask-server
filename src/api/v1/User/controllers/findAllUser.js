import defaultConfig from "../../../../config/default.js";
import userService from "../../../../lib/User/index.js";
import { query } from "../../../../utils/index.js";

const findAllUser =  async(req, res)=>{

    const page = req.query.page ?? defaultConfig.page;
    const limit = req.query.limit ?? defaultConfig.limit;
    const sortBy = req.query.sort_by ?? defaultConfig.sortBy;
    const sortType = req.query.sort_type ?? defaultConfig.sortType;
    const search = req.query.search ?? defaultConfig.search;

    try {
        const user = await userService.findAllUser(page, limit, sortBy, sortType, search);

        const data = query.getTransformItems(user, ["id", "name", "email", "role", "createdAt", "updatedAt"], req.path);

        //pagination
        // hateOS
        
        res.status(200).json({
            message: "GET All User",
            user
        })
    } catch (error) {
        console.log(error)
    }
    
}

export default findAllUser