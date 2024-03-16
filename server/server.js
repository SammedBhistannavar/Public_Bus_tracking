require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-route");
const connectdb =  require("./Database/db")

//Middle Ware
app.use(express.json())

//router
app.use("/api/auth",router);



connectdb().then(()=>{
    app.listen("3000",(req,res)=>{
        console.log("Server is Runig at PORT : ",3000)
    });

})


