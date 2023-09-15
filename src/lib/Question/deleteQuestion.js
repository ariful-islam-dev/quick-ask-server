import Question from "../../model/Question.js";
import { notFound } from "../../utils/error.js";

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

export default deleteQuestion;
