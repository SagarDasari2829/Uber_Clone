const express = require("express")
const cors = require("cors")
const app = express()
const AuthRouter = require("./routes/user.route")

app.use(express.json())
app.use(cors())
app.get("/" , async( req , res) =>{

    res.send("Hello world")
})

app.use("/api/Auth" , AuthRouter)

module.exports = app