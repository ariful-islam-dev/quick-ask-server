import userService from "../../../../lib/User/index.js";

const findAuthorByQuestion = async (req, res, next) => {
  const id = req.params.id;
  try {
    const author = await userService.findAuthorByQuestion(id);
    res.status(200).json({
      code: 200,
      message: "Your Question's Author",
      data: author,
    });
  } catch (error) {
    next(error);
  }
};

export default findAuthorByQuestion;
