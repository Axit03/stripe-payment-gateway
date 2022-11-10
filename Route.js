const express =require('express');
const router = express.Router()

//importing middleware
const {auth} = require('../middlewares/auth')
const {role} = require('../middlewares/role');



const registerController = require('../Controllers/registerUser')
const loginController = require('../Controllers/loginUser')

// for register
router.post('/register',registerController.registerUser)
// for login
router.post('/login',loginController.loginUser)


//route for all user
router.post('/home',auth,(req,res)=>{
    res.send("Home")
})

//route for admin
router.post('/admin',auth,role,(req,res)=>{
    res.send("Admin Page")
})
module.exports=router