const Group = require("../models/group.model");

exports.createGroup = async (req, res) => {
  try {
    const group = new Group(req.body);
    const savedGroup = await group.save();
    res.json(savedGroup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (group == null) {
      return res.status(404).json({ message: "Infected person not found" });
    }
    res.json(group);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateGroup = async (req, res) => {
  try {
    console.log(req.params);
    // const updatedGroup = await Group.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   {
    //     new: true,
    //   }
    // );
    // res.json(updatedGroup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteGroup = async (req, res) => {
  try {
    await Group.findByIdAndDelete(req.params.id);
    res.json({ message: "Group deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
