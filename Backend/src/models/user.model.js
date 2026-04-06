const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema =  new  mongoose.Schema({
    fullname:{
         firstname :{
             type: String,
             required :[ true , "First Name  Must be required "] ,
             minlength : [3 ,"First Must be at 3 Characters"]
         },
         lastname:{
                 type: String ,
                 minlength : [3 ,"lastname must be at 3 characters "]
              }
    },
    email :{
        type: String,
        required: [true ," Email Must be required true"],
        unique : true ,
        minlength : [5 ," Email  Must be at minimum 5 characters "]
    },
    password :{
         type : String ,
         required : [true , "Email password must be required "],
         minlength : [8 , " Password Must be at minimum 8 Character "]
    },
    socketId :{
         type : String 
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id : this._id} , process.env.JWT_SECRET)
    return  token
}

userSchema.methods.comparePassword = async (password)=>{
   return await bcrypt.compare(password , this.password)
}

userSchema.statics.hashPassword = async function(password){
     return await bcrypt.hash(password , 10)
}


module.exports = mongoose.model("user" , userSchema);