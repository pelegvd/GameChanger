import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phone: String,
  password: String,
  salt: String,
  type: String,
});

export default mongoose.model("User", userSchema);
