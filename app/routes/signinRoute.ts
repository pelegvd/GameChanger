import express from "express";
import mongoose from "mongoose";
import User from "../models/User";
export const signinRouter = express.Router();
const PWD_TOOL = require("./passwordEncryption");


signinRouter.post('/',async function(req, res) {
        try { 
            // check if the user exists 
            const user = await User.findOne({ email: req.body.email }); 
            console.log(user)
            const passwordHash = user?.password
            const passwordSalt = user?.salt
            console.log(passwordHash)
            console.log(passwordSalt)
            const result = PWD_TOOL.validatePassword(req.body.password, passwordHash, passwordSalt)
            console.log(result)
            if (user) { 
              //check if password matches  
              const passwordHash = user.password
              const passwordSalt = user.salt
              const result = PWD_TOOL.validatePassword(req.body.password, passwordHash, passwordSalt)
              if (PWD_TOOL.validatePassword(req.body.password, passwordHash, passwordSalt)) { 
                res.render("secret"); 
              } else { 
                res.status(400).json({ error: "password doesn't match" }); 
              } 
            } else { 
              res.status(400).json({ error: "User doesn't exist" }); 
            } 
          } catch (error) { 
            res.status(400).json({ error }); 
          } 
}); 
