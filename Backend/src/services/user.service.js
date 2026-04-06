const UserModel = require("../models/user.model")


module.exports.createUser = async({firstname, lastname,email ,password})=>{
    
    if(!firstname || !email || !password){
        throw new Error("fisrtname lastname must be at required ")
    }

    const user =  UserModel.create({
     fullname :{
         firstname ,
         lastname,
     },
     email ,
     password
    })
    return  user
}