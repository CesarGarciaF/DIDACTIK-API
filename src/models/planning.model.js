const mongoose = require("mongoose");

const planningSchema = new mongoose.Schema({
  grade: { type: Number },
  phase: { type: Number },
  school: { type: String },
});

const Planning = mongoose.model("Planning", planningSchema);

module.exports = Planning;
