const mongoose = require('mongoose');

const User = mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    roletype:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('users',User)
