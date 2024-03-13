const { Router } = require("express");
const { validateToken } = require("../middlewares/validateToken.middleware");
const authController = require("../controllers/auth.controller");
const eventController = require("../controllers/event.controller");

const router = Router();

router.post("/signup", authController.signupUser);

router.post("/login", authController.authenticateUser);

router.post("/logout", authController.logout);

router.get("/verify", authController.verifyToken);

router.post("/profile", validateToken, authController.profile);

router.get("/events", eventController.getAllEvents);

router.post("/events", eventController.createEvent);

module.exports = router;
