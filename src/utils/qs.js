//connect All query
const generateQueryStr = (query)=>{
    Object.keys(query).map(key=>encodeURIComponent(key) + "="+encodeURIComponent(query[key])).join("&")
};

export default generateQueryStr;