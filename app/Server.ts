import express from "express";
var bodyParser = require("body-parser");
var cors = require("cors");
const mongoose = require("mongoose");
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var createError = require('http-errors');
import Event from "./models/Event";


import { router } from './routes/routes';

const app = express();


app.use(cors());
app.use(bodyParser.json());
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/event',router);


async function init() {
  const mongoConnectionString =
    "mongodb+srv://gamechangerdb:Jolthit2023^@cluster0.www3fos.mongodb.net/";

  if (!mongoConnectionString) {
    throw new Error("must configure mongo connection string");
  }

  await mongoose.connect(mongoConnectionString);

  app.listen(9000, () =>
    console.log(`server started on http://localhost:9000`)
  );
}

init();


