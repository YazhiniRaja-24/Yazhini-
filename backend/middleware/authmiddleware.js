const jwt = require('jsonwebtoken')

exports.protect=(req,res,next)=>{//next() is used to call next middleware or route handler only used in middleware
      const token=req.headers.authorization.split(' ')[1];
      if(!token ){
        res.status(401).json({msg:"not authorized "})
      }
      try{
          // token = token.split(' ')[1];
           const decoded = jwt.verify(token,process.env.JWT_SECRET)
           req.user = decoded
           next()
      }
      catch(error){
        res.send("Invalid token")
      }
}