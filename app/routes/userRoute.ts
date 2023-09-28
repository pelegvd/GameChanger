import express from "express";
import mongoose from "mongoose";
import User from "../models/User";
export const router = express.Router();
const PWD_TOOL = require('./passwordEncryption');


router.get("/", async (req, res) => {
    try {
      const users  = await User.find();
      res.status(200).json(users);
    } catch (err) {
      console.log("Error from backend:", err);
      res
        .status(500)
        .send(
          "Internal Server Error: Something went wrong while fetching events."
        );
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
      return res.status(404).json({ message: "Event not found" });
      }
      res.status(200).json(user);
    } catch (err) {
      console.log("Error with sending the single event", err);
      res
        .status(500)
        .send("Internal Server Error: Something went wrong while fetching single event.");
    }
  })


router.post("/", async (req, res) => {
    var password = PWD_TOOL.calculatesHmacAndSalt(req.body.password)
    var passwordHash = password.hmac
    var passwordSalt = password.salt
    await User.create({
      id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: passwordHash ,
      salt: passwordSalt ,
      type: req.body.type,
    });
  
    res.status(200);
    res.end();
  });

