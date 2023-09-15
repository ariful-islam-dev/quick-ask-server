import questionService from "../../../../lib/Question/index.js";

const patchUpdateQuestion= async(req, res, next)=>{

        const id = req.params.id;
    try {
        const question = await questionService.patchUpdateQuestion(id, req.body, req.user);
        const response = {
            code: 200,
            message: "Update your question property",
            data: question,
            links:{
                self: req.path
            }
        }
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
   
  }

  export default patchUpdateQuestion;