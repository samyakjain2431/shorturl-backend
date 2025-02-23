const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createNewShortUrl } = require("../controllers/shortUrlController");

const router = express.Router();

router.post("/new", createNewShortUrl);

module.exports = router;