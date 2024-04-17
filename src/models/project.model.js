import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    project_phase: {
      type: Number,
    },
    project_degree: {
      type: String,
    },
    training_field: {
      type: String,
    },
    articulating_safts: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = model("Project", projectSchema);

export default Project;
