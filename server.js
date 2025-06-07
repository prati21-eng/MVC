const express = require('express');
const app = express();

const mongoose = require('mongoose');
const User = require('./models/user');
const PORT = 3000;
//middle ware for parsing body
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/MVC')
.then(console.log("Mongo db connected"))
.catch((err)=>{
    console.log("Error :",err);
})

app.get('/',(req,res)=>{
    res.send("Welcome to the homepage")
})

app.post('/users',async(req,res)=>{
    try {
        const user = new User(req.body);
        await user.save()
         res.status(201).json({ message: "User Created Successfully" });
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})
app.get('/users',async(req,res)=>{
    try {
       
        const users = await User.find()
         res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})
app.get('/users/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})
app.patch('/users/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})

app.listen(PORT, () => {
    console.log("App running on port", PORT);
});
