const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    start: { type: Date },
    end: { type: Date },
    created_by: { type: Number },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
