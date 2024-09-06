const errorMiddleware=(err,req,res,next)=>{
    err.message=err.message || "Somethng went wrong"
    err.statusCode=err.statucCode || 404
    return res.status(err.statusCode).json({
        sucess:false,
        message:err.message,
        stack:err.stack
    })
}

export default errorMiddleware