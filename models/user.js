const mongoose = require('mongoose');
const { use } = require('react');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
        min:1
    },
    gender:{
        type:String,
        enum:['male', 'female','other']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model('User',userSchema);
module.exports =User;
