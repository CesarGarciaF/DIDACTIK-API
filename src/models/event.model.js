import { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    start: { type: Date },
    end: { type: Date },
    created_by: { type: Number },
  },
  { timestamps: true }
);

const Event = model("Event", eventSchema);

export default Event;
