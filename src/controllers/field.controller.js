const Field = require("../models/field.model");

exports.createField = async (req, res) => {
  try {
    const field = new Field(req.body);
    const savedField = await field.save();
    res.json(savedField);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllFields = async (req, res) => {
  try {
    const fields = await Field.find();
    res.json(fields);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFieldById = async (req, res) => {
  try {
    const field = await Field.findById(req.params.id);
    if (field == null) {
      return res.status(404).json({ message: "Infected person not found" });
    }
    res.json(field);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateField = async (req, res) => {
  try {
    const updatedField = await Field.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedField);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteField = async (req, res) => {
  try {
    await Field.findByIdAndDelete(req.params.id);
    res.json({ message: "Field deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
