import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  grade: { type: Number },
  phase: { type: Number },
  school: { type: String },
});

const Course = model("Course", courseSchema);

export default Course;
