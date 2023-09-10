import defaultConfig from "../../../../config/default.js";
import answerService from "../../../../lib/Answer/index.js";
import { query } from "../../../../utils/index.js";

const findAllAnswer = async (req, res, next) => {
  const page = req.query.page || defaultConfig.page;
  const limit = req.query.limit || defaultConfig.limit;
  const sortType = req.query.sort_type || defaultConfig.sortType;
  const sortBy = req.query.sort_by || defaultConfig.sortBy;

  try {
    const answers = await answerService.findAllAnswer(null, {
      page,
      limit,
      sortBy,
      sortType,
    });
    
     
    const data = query.getTransformItems(
      answers,
      ["id", "body", "status", "question", "author", "createdAt", "updatedAt"],
      req.path
    );
         // pagination
     const totalItems = await answerService.count();
     const pagination = query.getPagination(totalItems, page, limit)
    // generate HateOS Links
    const links = query.getHateOSQuestions(
        req.url,
        !!pagination.next,
        !!pagination.prev,
        page,
        req.path,
        req.query
      );
   
    res.status(200).json({
      code: 200,
      message: "Retrive all answers",
      data,
      links,
      pagination
    });
  } catch (error) {
    next(error);
  }
};

export default findAllAnswer;
