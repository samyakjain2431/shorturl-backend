// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/db");

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB first
connectDB()

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });