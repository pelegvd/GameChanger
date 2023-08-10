//const mongoose = require('mongoose');
import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:String,
    description:String,
    location:String,
});


export default mongoose.model('Event', eventSchema);
