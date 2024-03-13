const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  grade: { type: Number },
  phase: { type: Number },
  school: { type: String },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
