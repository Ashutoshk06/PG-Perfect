const authorizedRoles=(role)=>
    async (req,res,next)=>{
             const currentRole=req.owner.role
             if(role!=currentRole){
               return next(new AppError("You don't have the permission to access",404))
                
             }
             next()
    }

export default authorizedRoles