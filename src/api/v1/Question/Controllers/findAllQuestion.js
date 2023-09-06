import defaultConfig from "../../../../config/default.js";
import questionService from "../../../../lib/Question/index.js";
import { query } from "../../../../utils/index.js";
const findAllQuestion = async (req, res, next) => {
  // query of request
  const page = req.query.page || defaultConfig.page;
  const limit = req.query.limit || defaultConfig.limit;
  const sortType = req.query.sort_type || defaultConfig.sortType;
  const sortBy = req.query.sort_by || defaultConfig.sortBy;
  const search = req.query.search || defaultConfig.search;

  try {
    // data
    const questions = await questionService.findAllQuestion(
      page,
      limit,
      sortBy,
      sortType,
      search
    );

    const data = query.getTransformItems(
      questions,
      [
        "id",
        "title",
        "description",
        "image",
        "author",
        "answers",
        "createdAt",
        "updatedAt",
      ],
      "/article"
    );
    // pagination
    const totalItems = await questionService.count(search);
    const pagination = query.getPagination(totalItems, page, limit);

    // links
    const links = query.getHateOSQuestions(req.url, !!pagination.next, !!pagination.prev, page, req.path, req.query);
    // response
    const response = {
      code: 200,
      message: "Get All Question",
      data,
      pagination,
      links
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export default findAllQuestion;
