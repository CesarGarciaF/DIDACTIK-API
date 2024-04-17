import Planning from "../models/planning.model.js";

export async function createPlanning(req, res) {
  try {
    const Planning = new Planning(req.body);
    const savedPlanning = await Planning.save();
    res.json(savedPlanning);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getAllPlannings(req, res) {
  try {
    const plannings = await Planning.find();
    res.json(plannings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getPlanningById(req, res) {
  try {
    const planning = await Planning.findById(req.params.id);
    if (planning == null) {
      return res.status(404).json({ message: "Infected person not found" });
    }
    res.json(planning);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function updatePlanning(req, res) {
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
}

export async function deletePlanning(req, res) {
  try {
    await Planning.findByIdAndDelete(req.params.id);
    res.json({ message: "Planning deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
