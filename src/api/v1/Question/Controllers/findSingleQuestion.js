import questionService from "../../../../lib/Question/index.js";

const findSingleQuestion = async(req, res, next)=>{
    // get question id
    const id = req.params.id;
    const expand = req.query.expand || "";
    try {
        // get question data
    const question = await questionService.findSingleQuestion(id, expand);
    // generate a link
    const links = {
        self: req.path,
        author: `${req.path}/author`,
        answers: req.path+"/"+"answers"
    }
    // response 
    res.status(200).json({
      code: 200,
      message: "Retrive a single user data Successfully",
      question,
      links
    })
    } catch (err) {
        next(err)
    }
  }

  export default findSingleQuestion;