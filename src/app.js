const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const shortUrlRoutes = require("./routes/shortUrlRoutes")


const app = express();

const allowedOrigins = [
  "http://localhost:3000",  // Allow local development
  // "https://your-frontend.netlify.app"  // Allow deployed frontend (update this after deployment)
];

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:3000"],  // ✅ Replace with your frontend URL
  credentials: true,  // ✅ Allows cookies & authentication headers
  methods: ["GET", "POST", "PUT", "DELETE"],  // ✅ Explicitly allow these methods
  allowedHeaders: ["Content-Type", "Authorization"],  // ✅ Allow these headers
}));

app.use("/api/auth", authRoutes);
app.use("/api/shortUrl", shortUrlRoutes );


app.get("/", (req, res) => {
    res.send("Hello, welcome to oukjkhkhkhr API!");
  });
app.get("/try", (req, res) => {
    res.send("You're trying hard! keep working!");
  });

module.exports = app; // 👈 Exporting the app
