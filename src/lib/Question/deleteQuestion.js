const Question = require("../../model/Question.js");
const { notFound } = require("../../utils/error.js");

const deleteQuestion = async (id) => {
  const question = await Question.findById(id);
  if (!question) {
    throw notFound("Question Not Found");
  }

  try {
    return Question.findByIdAndDelete(id);
  } catch (e) {
    next(e);
  }
};
module.exports = deleteQuestion;
