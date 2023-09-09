import defaultConfig from "../../../../config/default.js";
import answerService from "../../../../lib/Answer/index.js";

const findAllAnswer = async(req, res, next)=>{

      const page = req.query.page || defaultConfig.page;
      const limit = req.query.limit || defaultConfig.limit;
      const sortType = req.query.sort_type || defaultConfig.sortType;
      const sortBy = req.query.sort_by || defaultConfig.sortBy

    try {
      const answers = await answerService.findAllAnswer(null, {page, limit, sortBy, sortType})
      res.status(200).json({
        code: 200,
        message: "Retrive all answers",
        answers
      })  
    } catch (error) {
      next(error)
    }
    
  }

  export default findAllAnswer;