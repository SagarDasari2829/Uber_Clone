const express = require("express")
const router  = express.Router()
const {body} = require("express-validator")
const UserRegisterController = require("../controllers/auth.controller")

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min : 3}).withMessage('First name must be at least 3 charaters long '),
    body('password').isLength({min : 8}).withMessage("Password must be at least 8 characters long  ")
], UserRegisterController.registerUser )




module.exports = router