import express from 'express';
import mongoose from 'mongoose';
import Event from '../models/Event';
export const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    console.log("Error from backend:", err);
    res.status(500).send("Internal Server Error: Something went wrong while fetching events.");
  }
});

// router.get('/', async  (req, res) => {
//     const events = await Event.find();
//     res.status(200);
//     res.json(events);
//     res.end();
// })

router.post("/", async (req, res) => {
    await Event.create({
        id : new mongoose.Types.ObjectId(),
        title : req.body.title,
        description : req.body.description,
        location : req.body.location,
    });

    res.status(200);
    res.end();
});

router.put("/:id", async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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
