import Group from "../models/group.model.js";

export async function createGroup(req, res) {
  try {
    const group = new Group(req.body);
    const savedGroup = await group.save();
    res.json(savedGroup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getAllGroups(req, res) {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getGroupById(req, res) {
  try {
    const group = await Group.findById(req.params.id);
    if (group == null) {
      return res.status(404).json({ message: "Infected person not found" });
    }
    res.json(group);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function updateGroup(req, res) {
  try {
    console.log("Params: " + req.params);
    console.log("Body: " + req.body);
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
}

export async function deleteGroup(req, res) {
  try {
    await Group.findByIdAndDelete(req.params.id);
    res.json({ message: "Group deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
