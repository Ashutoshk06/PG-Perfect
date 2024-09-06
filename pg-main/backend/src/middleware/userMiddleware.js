import jwt from "jsonwebtoken"
const userjwtAuth=(req,res,next)=>{
    const token=(req.cookies.userToken) || null
    if(!token){
        return res.status(404).json({
            sucess:false,
            message:"Token does not exist"
        })
    }
    try{
        const payload=jwt.verify(token,process.env.JWT_SECRET_CODE)
        req.user=payload
    } 
    catch(err){
        res.status(500).json({
            sucess:false,
            message:err.message
        })
    }
    next()
}


export default userjwtAuth