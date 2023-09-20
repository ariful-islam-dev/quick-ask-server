const defaultConfig = require("../../../../config/default.js");
const answerService = require("../../../../lib/Answer/index.js");
const { notFound } = require("../../../../utils/error.js");
const { query } = require("../../../../utils/index.js");

const findAnswerByQuestion = async (req, res, next) => {
  const page = req.query.page || defaultConfig.page;
  const limit = req.query.limit || defaultConfig.limit;
  const sortBy = req.query.sort_by || defaultConfig.sortBy;
  const sortType = req.query.sort_type || defaultConfig.sortType;
  const { id } = req.params;
  try {
    const answers = await answerService.findAllAnswer(id, {page, limit, sortBy, sortType});


    //const Total Items
    const totalItems = answerService.count();
    //pagination
    const pagination = query.getPagination(totalItems, page, limit);
    const links = query.getHateOSQuestions(
      req.url,
      !!pagination.next,
      !!pagination.prev,
      page,
      req.path,
      req.query
    );

   if(answers.length === 0){
    throw notFound("Sorry you have not a question related answer")
   }
   res.status(200).json({
    code: 200,
    message: "Get Specific Question's Answer",
    data: answers,
    links,
    pagination,
  });
  } catch (error) {
    next(error);
  }
};

module.exports = findAnswerByQuestion;
