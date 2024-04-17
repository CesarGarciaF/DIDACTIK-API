import Event from "../models/event.model.js";

export async function getAllEvents(req, res) {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createEvent(req, res) {
  const { title, description, start, end } = req.body;
  console.log(req.body);

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
}

export async function updateEvent(req, res) {
  const { id, title, description, start, end } = req.body;

  console.log(req.body);

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
}

export async function deleteEvent(req, res) {}
