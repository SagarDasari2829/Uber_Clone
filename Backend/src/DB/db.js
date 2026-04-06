const mongoose = require("mongoose")

const connectToDB = () => {
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Connecting MongoDb  is Successfully ")
    }catch(error){
        console.log(error.message)
    }
}

module.exports = connectToDB;