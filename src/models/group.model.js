const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  grade: { type: Number },
  phase: { type: Number },
  school: { type: String },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
