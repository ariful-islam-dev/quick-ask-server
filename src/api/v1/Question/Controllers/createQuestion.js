import questionService from "../../../../lib/Question/index.js";

const createQuestion = async(req, res, next)=>{
    const {title, description, image, status}=req.body;
    try {
        const question = await questionService.createQuestion(title, description, image, status, req.user.id)
        res.status(201).json({
            code: 201,
            message: "Successfully Post a question",
            question
            
        })
    } catch (error) {
        next(error)
    }
};

export default createQuestion;