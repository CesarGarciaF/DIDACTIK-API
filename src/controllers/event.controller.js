const Event = require("../models/event.model");

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEvent = async (req, res) => {
  const { title, description, start, end } = req.body;

  const newEvent = new Event({
    title,
    description,
    start,
    end,
  });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  const { id, title, description, start, end } = req.body;

  console.log(req.body)

  // const newEvent = new Event({
  //   title,
  //   description,
  //   start,
  //   end,
  // });

  // try {
  //   const updatedEvent = await newEvent.updateOne({ _id: id });
  //   res.status(201).json(updatedEvent);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

exports.deleteEvent = async (req, res) => {};
