import express from "express";
import mongoose from "mongoose";
import User from "../models/User";
export const signupRouter = express.Router();
const PWD_TOOL = require("./passwordEncryption");
var validator = require("validator");


signupRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log("Error from backend:", err);
    res
      .status(500)
      .send(
        "Internal Server Error: Something went wrong while fetching users."
      );
  }
});

signupRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log("Error with sending the single user", err);
    res
      .status(500)
      .send(
        "Internal Server Error: Something went wrong while fetching single user."
      );
  }
});

signupRouter.post('/', (req, res) => {
  const password = PWD_TOOL.calculatesHmacAndSalt(req.body.password);
  const passwordHash = password.hmac;
  const passwordSalt = password.salt;
  
 User.findOne({email: req.body.email}).exec().then((doc) => {
  if (doc) {
    console.log(doc);
    res.status(500).send("ERROR: User with this Email Already Exist");
  } else {
    if (validator.isEmail(req.body.email)){
      if (validator.isStrongPassword(req.body.password, {
            minLength: 10,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          }
      )) {
        return user.save();
       
 
      } else {
        res.status(500).send("ERROR:Week Password");
      }
    } else {
      res.status(500).send("ERROR:Email Is Not Correct");
    }
  }
 }).then((result) => {
  res.status(200).end()
}).catch((err) => {
  res.status(500).send("ERROR: User Already Exist");
})

 const user = new User({
  id: new mongoose.Types.ObjectId(),
  name: req.body.name,
  email: req.body.email,
  phone: req.body.phone,
  password: passwordHash,
  salt: passwordSalt,
  type: req.body.type,
 })
  
})


// https://blog.domenic.me/youre-missing-the-point-of-promises/

// https://dolevoper.io/blog/a-map-to-promise-then/