const { Router } = require("express");
const { validateToken } = require("../middlewares/validateToken.middleware");
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const eventController = require("../controllers/event.controller");

const router = Router();

router.post("/signup", authController.signupUser);

router.post("/login", authController.authenticateUser);

router.post("/logout", authController.logout);

router.get("/verify", authController.verifyToken);

router.post("/profile", validateToken, authController.profile);

// User routes

router.get("/user", userController.getUsers);

router.get("/user/:id", userController.getUserById);

router.post("/user", userController.registerUser);

router.put("/user/:id", userController.updateUser);

router.delete("/user/:id", userController.deleteUser);

// Event routes

router.get("/events", eventController.getAllEvents);

router.post("/events", eventController.createEvent);

module.exports = router;
