import { Schema, model } from "mongoose";

const planningSchema = new Schema({
  beginDate: { type: Date },
  endDate: { type: Date },
  session: { type: Number },
  phase: { type: Number },
  start: { type: String },
  develop: { type: String },
  end: { type: String },
  field: {
    type: Schema.Types.ObjectId,
    ref: "field",
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Planning = model("Planning", planningSchema);

export default Planning;
