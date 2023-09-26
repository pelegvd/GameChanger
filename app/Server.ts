import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { router } from './routes/routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/events', router);


async function init() {
  const mongoConnectionString =
    "mongodb+srv://gamechangerdb:Jolthit2023^@cluster0.www3fos.mongodb.net/";

  if (!mongoConnectionString) {
    throw new Error("must configure mongo connection string");
  }

  await mongoose.connect(mongoConnectionString);
  console.log("connected to mongoDB");

  app.listen(9000, () =>
    console.log(`server started on port:9000`)
  );
}

init();
