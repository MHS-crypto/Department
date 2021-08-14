const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");

//const port = process.env.PORT || 3000;


dotenv.config({path:'./config.env'});
require('./DB/connection');


app.use(express.json());

app.use(require('./Router/auth'));
const PORT = process.env.PORT;


// running server on th e following port
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});

app.get('/addDepartment',(req,res)=>{
    res.send("Hello from Department");
});




