const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config({path: './config.env'});
require('./db/connection');
const PORT = process.env.PORT;



app.get('/server', (req, res)=>{
    return res.send("Server Connected Sucessfully")
})

''
app.listen(PORT,()=>{
    console.log(`Sever listening at port ${PORT}....`);
})