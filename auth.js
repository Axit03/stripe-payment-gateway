const User = require('../models/User');
const jwt = require('jsonwebtoken')

const auth =(req,res,next)=>{
    const token = req.body.token||req.query.token
    if(!token){
       return res.send("token is required")
    }
    try{
        const encode = jwt.verify(token,'secretkey')
        req.user=encode
    }
    catch(error){
        return res.send("invalid token")

    }
    next()
}

module.exports={auth}