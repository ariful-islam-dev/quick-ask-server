const generateQueryStr = require("./qs.js");
const { getHateOSQuestions, getPagination, getTransformItems } = require("./query.js");

const qs = {generateQueryStr}

const query = {
    getTransformItems,
    getPagination,
    getHateOSQuestions
}

module.exports= { qs, query };

