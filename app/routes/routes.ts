import express from 'express';
var router = express.Router();
const mongoose = require('mongoose');
import Event from '../models/Event';



router.get('/event', async  (req, res) => {
    //const events = await Event.find();
    //Event.find().then((events) => console.log(events))
    //.catch((err) => console.log(err));
    //res.send(events);
    //res.status(200);
    //res.json(events);
    //res.end();
})


router.post("/event", async (req, res) => {
    await Event.create({
        id : new mongoose.Types.ObjectId(),
        title : req.body.title,
        description : req.body.description,
        location : req.body.location,
    });

    res.status(200);
    res.end();
});

router.put("/event/:id", async (req, res) => {
    const event = new Event({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        location : req.body.location,
      });
      Event.updateOne({_id: req.params.id}, event).then(
        () => {
          res.status(201).json({
            message: 'Thing updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
  
});

router.delete('/event/:id', async (req, res) => {
    Event.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

  module.exports = router;
