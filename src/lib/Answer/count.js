const Answer = require("../../model/Answer.js");

const count = async()=>{
   
    return Answer.count();

};

module.exports = count;