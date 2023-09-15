import Question from "../../model/Question.js";

const findAllQuestion = async (page, limit, sortBy, sortType, search) => {
  //sort
  const sortStr = `${sortType === "dsc" ? "-" : ""}${sortBy}`;
  const filter = {
    title: { $regex: search, $options: "i" },
  };

  const questions = await Question.find(filter).select(["-__v", "-answers"])
    .populate()
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);

    return questions.map(question=>({...question._doc, id: question.id}))
};

export default findAllQuestion;
