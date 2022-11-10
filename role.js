const User = require('../models/User');
const jwt = require('jsonwebtoken')

const role =async(req,res,next)=>{
    
    const a = req.user.roletype
    // console.log(a)
    
    if(a==2){
        // console.log( "admin logged in")
    }
    else{
       return res.send("You cannot access this page")
    }
    next()
}

module.exports={role}