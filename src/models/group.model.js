import { Schema, model } from "mongoose";

const groupSchema = new Schema({
  grade: { type: Number },
  phase: { type: Number },
  school: { type: String },
  photo: { type: String },
  field: {
    type: Schema.Types.ObjectId,
    ref: "field",
  },
  createBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Group = model("Group", groupSchema);

export default Group;
