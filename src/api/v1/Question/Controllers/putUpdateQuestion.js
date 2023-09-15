import questionService from "../../../../lib/Question/index.js";

const putUpdateQuestion = async(req, res, next)=>{

    const id = req.params.id;
    const {title, description}=req.body;

    const image = req.body.image || "";
    const status = req.body.status || "public"; 

   try {
    const {question, code}= await questionService.putUpdateQuestion(id, {title, description, image, status, author: req.user.id});
    const response = {
        code: code,
        message: code === 200 ? "Question Update Successfully": "Create a new Question",
        data:question,
        link: req.path

    }
    res.status(200).json(response)
   } catch (err) {
        next(err)
   }
  }

export default putUpdateQuestion;