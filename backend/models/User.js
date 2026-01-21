const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
    },
    
    email:{
        type:String,
        required:true,//must be required
        unique:true//should be unique we cant have duplicate emails 
    },
    password:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model('Users',userSchema)