const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  photo: { type: String },
});

const Field = mongoose.model("Field", fieldSchema);

module.exports = Field;