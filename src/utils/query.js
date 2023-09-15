import defaultConfig from "../config/default.js";
import generateQueryStr from "./qs.js";

// added data link
const getTransformItems = (items = [], selection = [], path = "/") => {
  if (!Array.isArray(items) && !Array.isArray(selection)) {
    throw new Error("Invalid Arguments");
  }

  if (selection.length === 0) {
    return items.map((item) => ({ ...items, link: `${path}/${item.id}` }));
  }

  return items.map((item) => {
    const result = {};
    selection.forEach((key) => {
      result[key] = item[key];
    });
    result.link = `${path}/${item.id}`;
    return result;
  });
};

const getPagination = (
  totalItems = defaultConfig.totalItems,
  page = defaultConfig.page,
  limit = defaultConfig.limit
) => {
  const totalPage = Math.ceil(totalItems / limit);

  const pagination = {
    page,
    limit,
    totalItems,
    totalPage,
  };

  if (page < totalPage) {
    pagination.next = page + 1;
  }
  if (page > 1) {
    pagination.prev = page - 1;
  }

  return pagination;
};

const getHateOSQuestions=(url="/", hasNext=false, hasPrev=false,page=1, path="", query={})=>{
  const links = {
    self: url
  }

  if(hasNext){
    const queryStr = generateQueryStr({...query, page: page+1});
    links.next = `${path}?${queryStr}`;
  }

  if(hasPrev){
    const queryStr = generateQueryStr({...query, page: page-1});
    links.prev = `${path}?${queryStr}`;
  };

  return links
}

export { getHateOSQuestions, getPagination, getTransformItems };

