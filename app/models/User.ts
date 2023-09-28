import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phone: Number,
  password: String,
  salt
  type: String,
});

export default mongoose.model("User", userSchema);
