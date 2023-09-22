//connect All query
const generateQueryStr = (query)=>{
   return Object.keys(query).map(key=>encodeURIComponent(key) + "="+encodeURIComponent(query[key])).join("&")
};

module.exports = generateQueryStr;