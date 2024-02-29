const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
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

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
