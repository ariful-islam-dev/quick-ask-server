const answerService = require("../../../../lib/Answer/index.js");

const findSingleAnswer =  async (req, res, next) => {
    const id = req.params.id;
    console.log(id)

    try {
        const answer = await answerService.findSingleAnswer(id);
    answer.link = `/answer/${answer.id}`;
    
    res.status(200).json({
      code: 200,
      message: "Updated the answer Successfully",
      data:answer
    });
    } catch (error) {
        next(error)
    }
  }

 module.exports =  findSingleAnswer;