const notFound =(msg="Resources Not Found")=>{
    const error = new Error(msg);
    error.status=404;
    return error
}

const serverError = (msg = "Internal Server Error")=>{
    const error = new Error(msg);
    error.status=500;
    return error
}
const badRequest = (msg ="Bad Request")=>{
    const error = new Error(msg);
    error.status=400
    return error
}

export { badRequest, notFound, serverError };

