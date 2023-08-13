import express from 'express';
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var createError = require('http-errors');
//import Event from './models/Event';

var mongoDB = 'mongodb+srv://gamechangerdb:Jolthit2023^@cluster0.www3fos.mongodb.net/';
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




var eventRouter = require('./routes/routes');

const app = express();

app.listen(9000, () => console.log(`server started on http://localhost:9000`));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/event', eventRouter);

//app.get('/event', async  (req, res) => {
    //const events = await Event.find();
    //Event.find().then((events) => console.log(events))
    //.catch((err) => console.log(err));
    //res.send(events);
    //res.status(200);
    //res.json(events);
    //res.end();
//})



//app.post("/event", async (req, res) => {
//    await Event.create({
//        id : new mongoose.Types.ObjectId(),
//        title : req.body.title,
//        description : req.body.description,
//        location : req.body.location,
//    });

//    res.status(200);
//    res.end();
//});

//app.put("/event/:id", async (req, res) => {
//    const event = new Event({
//        _id: req.params.id,
//        title: req.body.title,
//        description: req.body.description,
//        location : req.body.location,
//      });
//      Event.updateOne({_id: req.params.id}, event).then(
//        () => {
//          res.status(201).json({
//            message: 'Thing updated successfully!'
//          });
//        }
//      ).catch(
//        (error) => {
//          res.status(400).json({
//            error: error
//          });
//        }
//      );
  
//});

//app.delete('/event/:id', async (req, res) => {
//    Event.deleteOne({_id: req.params.id}).then(
//      () => {
//        res.status(200).json({
//          message: 'Deleted!'
//        });
//      }
//    ).catch(
//      (error) => {
//        res.status(400).json({
//          error: error
//        });
//      }
//    );
//  });



//async function init() {
//    const mongoConnectionString = 'mongodb+srv://gamechangerdb:Jolthit2023^@cluster0.www3fos.mongodb.net/';

//    if (!mongoConnectionString) {
//        throw new Error("must configure mongo connection string");
//    }

//    await mongoose.connect(mongoConnectionString);

//    app.listen(9000, () => console.log(`server started on http://localhost:9000`));
//}

//init();


module.exports = app;