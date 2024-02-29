const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const { validateToken } = require("../middlewares/validateToken.middleware");

const router = Router();

router.post("/signup", authController.signupUser);

router.post("/login", authController.authenticateUser);

router.post("/logout", authController.logout);

router.get("/verify", authController.verifyToken);

router.post("/profile", validateToken, authController.profile);

module.exports = router;
