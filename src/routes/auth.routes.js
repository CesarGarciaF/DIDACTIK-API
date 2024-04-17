import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.middleware.js";
import {
  signupUser,
  authenticateUser,
  logout,
  verifyToken,
  profile,
} from "../controllers/auth.controller.js";
import {
  getUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { getAllEvents, createEvent } from "../controllers/event.controller.js";
import {
  getAllFields,
  getFieldById,
  createField,
  updateField,
  deleteField,
} from "../controllers/field.controller.js";
import {
  getAllPlannings,
  getPlanningById,
  createPlanning,
  updatePlanning,
  deletePlanning,
} from "../controllers/planning.controller.js";
import {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
} from "../controllers/group.controller.js";

const router = Router();

router.post("/signup", signupUser);

router.post("/login", authenticateUser);

router.post("/logout", logout);

router.get("/verify", verifyToken);

router.get("/profile", validateToken, profile);

// User routes
router.get("/users", getUsers);

router.get("/user", validateToken, getUserById);

router.post("/user", registerUser);

router.put("/user", validateToken, updateUser);

router.delete("/user/:id", deleteUser);

// Event routes
router.get("/events", getAllEvents);

router.post("/events", createEvent);

// Field routes
router.get("/field", getAllFields);

router.get("/field/:id", getFieldById);

router.post("/field", createField);

router.put("/field/:id", updateField);

router.delete("/field/:id", deleteField);

// Planning routes
router.get("/planning", getAllPlannings);

router.get("/planning/:id", getPlanningById);

router.post("/planning", createPlanning);

router.put("/planning/:id", updatePlanning);

router.delete("/planning/:id", deletePlanning);

// Group routes
router.get("/group", getAllGroups);

router.get("/gropu/:id", getGroupById);

router.post("/group", createGroup);

router.put("/group/:id", updateGroup);

router.delete("/group/:id", deleteGroup);

export default router;
