import defaultConfig from "../../../../config/default.js";
import answerService from "../../../../lib/Answer/index.js";
import { query } from "../../../../utils/index.js";

const findAnswerByQuestion = async (req, res, next) => {
  const page = req.query.page || defaultConfig.page;
  const limit = req.query.limit || defaultConfig.limit;
  const { id } = req.params;
  try {
    const answers = await answerService.findAllAnswer(id);

    //const Total Items
    const totalItems = answers.length;
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

    res.status(200).json({
      code: 200,
      message: "Get Post all answer",
      data: answers,
      // links: {
      //   self: "/questions/12345abcle/answers",
      //   question: "/questions/12345abcle",
      //   author: "/questions/12345abcle/answers/ans123/auth",
      //   nextPage: "/questions/12345abcle/answers?page=3&limit=10",
      //   prevPage: "/questions/12345abcle/answers?page=1&limit=10",
      // },
      links,
      pagination,
    });
  } catch (error) {
    next(error);
  }
};

export default findAnswerByQuestion;
