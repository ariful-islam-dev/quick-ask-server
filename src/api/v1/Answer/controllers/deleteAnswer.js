import answerService from "../../../../lib/Answer/index.js";

const deleteAnswer =  async (req, res, next) => {
    const id = req.params.id;
   try {
    await answerService.removeAnswer(id, req.user);
    res.status(204).json({
        code: 204,
        message: "Deleted Successfully",
      });
   } catch (error) {
    next(error)
   }
  }

  export default deleteAnswer;