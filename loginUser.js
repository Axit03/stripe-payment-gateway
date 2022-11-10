const express =require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken')


const loginUser=async(req,res)=>{
    try{
    const {email,password,roletype}=req.body
 
    const u = await User.findOne({email,password,roletype})
    if(u){
        const token = jwt.sign({id:email,password,roletype},'secretkey',{expiresIn:"24d",})
        console.log(token)
        u.token=token
        
        return res.json(u)
    }
     
     return res.status(400).send("Invalid Credentials");
   
    }
    catch(error){
        console.log(error)
    }
}

module.exports={loginUser}