require("dotenv").config()
const app = require("./src/app")
const http = require("http")
const  PORT = process.env.PORT || 5000 
const connectDB = require("./src/DB/db")

const server = http.createServer(app)

app.listen(PORT , ()=>{
    connectDB()
    console.log(`Server Run On Port Number is ${PORT}`)
})


