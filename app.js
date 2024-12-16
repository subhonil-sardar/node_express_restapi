const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userrouter = require("./routes/user.route");

//Body Parser Setup
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Cors Setup
app.use(cors());


//Home route
app.get("/", (req, res) =>{
    res.sendFile(__dirname+"/views/index.html")
});
//User route
app.use("/api/user", userrouter)


//Page not found
app.use((req, res, next)=>{
    res.status(404).json({
        message : "404! Not Found",
    });
});
//Server Error
app.use((err, req, res, next)=>{
    res.status(500).json({
        message : "Something Broke",
    });
});


module.exports = app;