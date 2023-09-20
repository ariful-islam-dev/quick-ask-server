const answerService = require("../../../../lib/Answer/index.js");

const updateAnswer =async (req, res, next) => {
    const id = req.params.id;

    const answer = await answerService.updateAnswer(id, req.body, req.user)
    answer.link = `${req.path}`;
    
    try {
      res.status(200).json({
        code: 200,
        message: "Updated the answer Successfully",
        data: answer
      });

    } catch (error) {
      next(error);
    }
  }

module.exports = updateAnswer;