import questionService from "../../../../lib/Question/index.js";

const deleteQuestion = async (req, res, next) => {
  const id = req.params.id;
  try {
      await questionService.deleteQuestion(id);
    res.status(204).json({
      code: 204,
      message: "Delete This question item" ,

    });
  } catch (error) {
    next(error);
  }
};

export default deleteQuestion;
