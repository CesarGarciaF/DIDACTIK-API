const mongoose = require("mongoose");

const planningSchema = new mongoose.Schema({
  beginDate: { type: Date },
  endDate: { type: Date },
  session: { type: Number },
  phase: { type: Number },
  start: { type: String },
  develop: { type: String },
  end: { type: String },
  field: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "field",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Planning = mongoose.model("Planning", planningSchema);

module.exports = Planning;
