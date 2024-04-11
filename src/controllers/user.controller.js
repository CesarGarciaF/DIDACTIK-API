const User = require("../models/user.model");

exports.getUsers = (req, res) => {
  User.find({})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;

  await User.findById({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.registerUser = async (req, res) => {
  const userData = req.body;

  const newUser = new User({
    email: userData.email,
    username: userData.username,
    password: userData.password,
  });

  await newUser
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const userData = req.body;

  const newUser = new User({
    email: userData.email,
    username: userData.username,
    password: userData.password,
  });

  await newUser
    .updateOne({ _id: id }, { $set: { newUser } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;

  User.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
