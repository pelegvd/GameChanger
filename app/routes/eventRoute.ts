import express from "express";
import mongoose from "mongoose";
import Event from "../models/Event";
export const eventRouter = express.Router();

eventRouter.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    console.log("Error from backend:", err);
    res
      .status(500)
      .send(
        "Internal Server Error: Something went wrong while fetching events."
      );
  }
});

eventRouter.get("/:id", async (req, res) => {
  try {
    const myEvent = await Event.findById(req.params.id);
    if (!myEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(myEvent);
  } catch (err) {
    console.log("Error with sending the single event", err);
    res
      .status(500)
      .send(
        "Internal Server Error: Something went wrong while fetching single event."
      );
  }
});

eventRouter.post("/", async (req, res) => {
  await Event.create({
    id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    category: req.body.category,
    members: req.body.members,
  });

  res.status(200);
  res.end();
});

eventRouter.put("/:id", async (req, res) => {
  const event = new Event({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    category: req.body.category,
    members: req.body.members,
  });

  Event.updateOne({ _id: req.params.id }, event)
    .then(() => {
      res.status(201).json({
        message: "Thing updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

eventRouter.delete("/:id", async (req, res) => {
  Event.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});
