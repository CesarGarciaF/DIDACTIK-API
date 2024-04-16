const Planning = require("../models/planning.model");

exports.createPlanning = async (req, res) => {
  try {
    const Planning = new Planning(req.body);
    const savedPlanning = await Planning.save();
    res.json(savedPlanning);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllPlannings = async (req, res) => {
  try {
    const plannings = await Planning.find();
    res.json(plannings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPlanningById = async (req, res) => {
  try {
    const planning = await Planning.findById(req.params.id);
    if (planning == null) {
      return res.status(404).json({ message: "Infected person not found" });
    }
    res.json(planning);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePlanning = async (req, res) => {
  try {
    const updatedPlanning = await Planning.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPlanning);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePlanning = async (req, res) => {
  try {
    await Planning.findByIdAndDelete(req.params.id);
    res.json({ message: "Planning deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
