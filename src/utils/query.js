import defaultConfig from "../config/default.js";

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

export { getPagination, getTransformItems };

