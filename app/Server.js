var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require("mongoose")
const routes = require('./routes/routes');

//var app = express();
//app.use(cors())
//app.use(bodyParser.json());

mongoose
    .connect('mongodb+srv://gamechangerdb:Jolthit2023^@cluster0.www3fos.mongodb.net/', { useNewUrlParser: true})
    .then(() => { 
        const app = express()
        app.use(express.json());  
        app.use("/api", routes)

        app.listen(9000,() => {
        console.log("Server has started!")
})
    })


//app.post('/event', (req, res) => {
//  console.log(req.body);
//  res.status(200).end();
//})

//module.exports = app;