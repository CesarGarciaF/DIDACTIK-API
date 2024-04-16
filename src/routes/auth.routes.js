const { Router } = require("express");
const { validateToken } = require("../middlewares/validateToken.middleware");
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const eventController = require("../controllers/event.controller");
const fieldController = require("../controllers/field.controller");
const planningController = require("../controllers/planning.controller");
const groupController = require("../controllers/group.controller");

const router = Router();

router.post("/signup", authController.signupUser);

router.post("/login", authController.authenticateUser);

router.post("/logout", authController.logout);

router.get("/verify", authController.verifyToken);

router.post("/profile", validateToken, authController.profile);

// User routes
router.get("/users", userController.getUsers);

router.get("/user", validateToken, userController.getUserById);

router.post("/user", userController.registerUser);

router.put("/user", validateToken, userController.updateUser);

router.delete("/user/:id", userController.deleteUser);

// Event routes
router.get("/events", eventController.getAllEvents);

router.post("/events", eventController.createEvent);

// Field routes
router.get("/field", fieldController.getAllFields);

router.get("/field/:id", fieldController.getFieldById);

router.post("/field", fieldController.createField);

router.put("/field/:id", fieldController.updateField);

router.delete("/field/:id", fieldController.deleteField);

// Planning routes
router.get("/planning", planningController.getAllPlannings);

router.get("/planning/:id", planningController.getPlanningById);

router.post("/planning", planningController.createPlanning);

router.put("/planning/:id", planningController.updatePlanning);

router.delete("/planning/:id", planningController.deletePlanning);

// Group routes
router.get("/group", groupController.getAllGroups);

router.get("/gropu/:id", groupController.getGroupById);

router.post("/group", groupController.createGroup);

router.put("/group/:id", groupController.updateGroup);

router.delete("/group/:id", groupController.deleteGroup);

module.exports = router;
