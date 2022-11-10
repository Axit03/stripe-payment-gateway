const express =require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken')


const registerUser = async(req,res)=>{
    try{
        const {firstname,lastname,email,password,roletype}=req.body
    
        if(!firstname&&lastname&&email&&password&&roletype){
           return res.send("all input required")
        }
     
        const oldUser = await User.findOne({email})
        if(oldUser){
           return res.send("Already registerd")
        }
        const user = await User.create({
            firstname,
            lastname,
            email,
            password,
            roletype
        })
        const token =jwt.sign({id:email,password,roletype},'secretkey',{
            expiresIn:'24d',
        })
        user.token = token;

        console.log(token)
    
        res.json(user);
        return;
    }
catch(err){
    console.error(err.message);
    res.send(err.message);
    return;
}
}

module.exports={registerUser}