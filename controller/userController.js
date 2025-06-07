const express = require('express');
const router = express.Router();
const User = require('../models/user');

const postUser =async(req,res)=>{
    try {
        const user = new User(req.body);
        await user.save()
         res.status(201).json({ message: "User Created Successfully" });
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

const getUsers = async(req,res)=>{
    try {
       
        const users = await User.find()
         res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

const getUserByID = async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
             return res.status(404).json({ message: 'User not found' });
            }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

const updateUserByID = async(req,res)=>{
    try {
        const id = req.params.id;
        
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
            }
            //updating the user data
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.age = req.body.age || user.age;

            await user.save();
        
        res.status(200).json({message:"Update Successfully",id:user.id});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

const deleteUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
            }
           
        
        res.status(200).json({message:"Deleted Successfully"});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

module.exports ={
    postUser,
    getUsers,
    getUserByID,
    updateUserByID,
    deleteUserById
}