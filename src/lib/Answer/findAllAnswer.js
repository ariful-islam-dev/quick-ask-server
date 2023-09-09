import Answer from "../../model/Answer.js";

const findAllAnswer = async (questionId, { page, limit, sortBy, sortType }) => {
  const sortStr = `${sortType === "dsc" ? "-" : ""}${sortBy}`;
  if (!questionId) {
    const answer = await Answer.find()
      .populate({ path: "question", select: "title description" })
      .select("-__v")
      .sort(sortStr)
      .skip(page * limit - limit)
      .limit(limit);
    return answer;
  }

  const answers = await Answer.find({ question: questionId })
    .populate({ path: "question", select: "title description" })
    .select("-__v")
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);

  return answers;
};

export default findAllAnswer;
