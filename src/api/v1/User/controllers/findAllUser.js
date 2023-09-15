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
        const users = await userService.findAllUser(page, limit, sortBy, sortType, search);

        const data = query.getTransformItems(users, ["id", "name", "email", "role","status", "createdAt", "updatedAt"], req.path);

        //pagination
        const totalItems = await userService.count(search);

        const pagination = query.getPagination(totalItems,page, limit)
        // hateOS
        const links = query.getHateOSQuestions(req.url, !!pagination.next, !!pagination.prev, page, req.path, req.query )
        
        res.status(200).json({
            code: 200,
            message: "GET All User",
            data,
            pagination,
            links
        })
    } catch (error) {
        console.log(error)
    }
    
}

export default findAllUser