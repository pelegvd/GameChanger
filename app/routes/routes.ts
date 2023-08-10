//const express = require('express');
//const Event = require('../models/Event');
//const router = express.Router();

//router.get('/event', async  (req, res) => {
//    const events = await Event.find();
//    res.send(events);
//})

//router.post('/event', async (req, res) => {
//   const event = new Event({
//        _id: new mongoose.Types.ObjectId(),
//       title:req.body.title,
//        description:req.body.decription,
//        location:req.body.location,
//    })
//    await event.save();
//    res.send(event);
//    console.log(event);
//})

//module.exports = router;