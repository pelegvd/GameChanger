import express from "express";
import mongoose from "mongoose";
import User from "../models/User";
export const signupRouter = express.Router();
const PWD_TOOL = require("./passwordEncryption");
// import passwordCoplexity from "joi-password-complexity";
var validator = require("validator");
var passwordValidator = require("password-validator");

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

signupRouter.post("/", async (req, res) => {

  if(req.body.username && req.body.password && req.body.emailAddress && req.body.firstName && req.body.lastName){
    results = databaseConnection.query(`SELECT userName FROM users WHERE userName = '${req.body.username}'`)
    if(results.length == 0){
        // password validation:
        if(validator.isStrongPassword(req.body.password, {
                         minLength: 10,
                         minLowercase: 1,
                        minUppercase: 1,
                         minNumbers: 1,
                         minSymbols: 1,
        })){
            var validationMessage = passwordValidation.error.details[0].message
            res.status(400).send(`ValidationErr: ${validationMessage}`)
        }else{
          const password = PWD_TOOL.calculatesHmacAndSalt(req.body.password);
          const passwordHash = password.hmac;
          const passwordSalt = password.salt;
          User.create({
            id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: passwordHash,
            salt: passwordSalt,
            type: req.body.type,
          });
        }
    }else{
        
        res.status(400).send(`the user '${req.body.username}' is already exists` + JSON.stringify(results));
    }
} else{
    res.status(400).send("One or more parameters are not provided. Required parameters:'username','password','emailAddress'");
}


  

  User.findOne({ email: req.body.email }).exec().then(doc) =>

  await 

  res.status(200);
  res.end();
});

// signupRouter.post("/", async (req, res) => {
//   const password = PWD_TOOL.calculatesHmacAndSalt(req.body.password);
//   const passwordHash = password.hmac;
//   const passwordSalt = password.salt;

//   User.findOne({ email: req.body.email })
//     .exec()
//     .then((doc) => {
//       if (doc) {
//         console.log(doc);
//         res.status(500).send("ERROR: User with this Email Already Exist");
//       } else {
//         if (validator.isEmail(req.body.email)) {
//           if (
//             validator.isStrongPassword(req.body.password, {
//               minLength: 10,
//               minLowercase: 1,
//               minUppercase: 1,
//               minNumbers: 1,
//               minSymbols: 1,
//             })
//           ) {
//             saveUser();
//             // CreateHistory();
//           } else {
//             return res.status(500).send("ERROR:Week Password");
//           }
//         } else {
//           return res.status(500).send("ERROR:Email Is Not Correct");
//         }
//       }
//     });

//   const user = new User({
//     id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     password: passwordHash,
//     salt: passwordSalt,
//     type: req.body.type,
//   });

//   function saveUser() {
//     user
//       .save()
//       .then((result) => {
//         console.log(result);
//         res.status(200).redirect("/");
//       })
//       .catch((err) => {
//         res.status(500).send("ERROR: User Already Exist");
//         console.log(res);
//       });
//   }
// });
