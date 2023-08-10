//var express = require('express');
import express from 'express';
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
import Event from './models/Event';
//const Event = require('./models/Event');
//import { createServer } from "http";

const app = express();
app.use(cors())
app.use(bodyParser.json());


app.get('/event', async  (req, res) => {
    const events = await Event.find();
    //res.send(events);
    res.status(200);
    res.json(events);
    res.end();
})

//app.post('/event', (req, res) => {
//  console.log(req.body);
//  res.status(200).end();
//})


app.post("/event", async (req, res) => {
    await Event.create({
        id : new mongoose.Types.ObjectId(),
        title : req.body.title,
        description : req.body.description,
        location : req.body.location,
    });

    res.status(200);
    res.end();
});


async function init() {
    const mongoConnectionString = 'mongodb+srv://gamechangerdb:Jolthit2023^@cluster0.www3fos.mongodb.net/';

    if (!mongoConnectionString) {
        throw new Error("must configure mongo connection string");
    }

    await mongoose.connect(mongoConnectionString);

    app.listen(9000, () => console.log(`server started on http://localhost:9000`));
}

init();




//module.exports = app;