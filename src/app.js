const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const shortUrlRoutes = require("./routes/shortUrlRoutes")


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api/auth", authRoutes);
app.use("/api/shortUrl", shortUrlRoutes );


app.get("/", (req, res) => {
    res.send("Hello, welcome to our API!");
  });

module.exports = app; // 👈 Exporting the app
