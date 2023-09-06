import Question from "../../model/Question.js";

const count = async(search="")=>{
    const filter = {
        title: {$regex: search, $options: "i"}
    }
    return Question.count(filter);

};

export default count;