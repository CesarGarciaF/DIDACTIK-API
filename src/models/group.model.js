const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  grade: { type: Number },
  phase: { type: Number },
  school: { type: String },
  photo: { type: String },
  field: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "field",
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
