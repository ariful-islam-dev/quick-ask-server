import answerService from "../../../../lib/Answer/index.js";

const createAnswer = async(req, res, next) => {
    const questionId =req.params.id;
    const user = req.user;
    
   const  status = req.body.status|| "draft";

    try {
      const answer  = await answerService.createAnswer(
        req.body.body,
        status,
        questionId,
        user.id
      );
      
      res.status(201).json({
        code: 201,
        message: "Post a new answer",
        data: answer
      });
    

    } catch (error) {
      next(error)
    }

  }

  export default createAnswer