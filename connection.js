const mongoose = require('mongoose');

const coonection = ()=>{
    mongoose.connect('mongodb://localhost:27017/MVC')
    .then(console.log("Mongo db connected"))
    .catch((err)=>{
    console.log("Error :",err);
})
}

module.exports = coonection