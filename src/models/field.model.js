import { Schema, model } from "mongoose";

const fieldSchema = new Schema({
  name: { type: String },
  description: { type: String },
  photo: { type: String },
});

const Field = model("Field", fieldSchema);

export default Field;
