import generateQueryStr from "./qs.js";
import { getHateOSQuestions, getPagination, getTransformItems } from "./query.js";

const qs = {generateQueryStr}

const query = {
    getTransformItems,
    getPagination,
    getHateOSQuestions
}

export { qs, query };

