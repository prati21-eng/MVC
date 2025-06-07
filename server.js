const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const connection = require('./connection');
const log = require('./middleware/reqReslog');



connection();
const PORT = 3000;
//middle ware for parsing body
app.use(express.urlencoded({ extended: true }));
app.use(log('log.txt'));

//user routes
app.use('/users',userRoutes);



app.get('/',(req,res)=>{
    res.send("Welcome to the homepage")
})






app.listen(PORT, () => {
    console.log("App running on port", PORT);
});
