const express = require("express");
const { register, login, logout, meDashboard, getUser } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

//Protected Route 🔒
router.get("/me", authMiddleware, getUser);

module.exports = router;
