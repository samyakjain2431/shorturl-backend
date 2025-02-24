const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const shortUrlRoutes = require("./routes/shortUrlRoutes")

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://shorturl-samyak.netlify.app"], // ✅ Allow both local & deployed frontend
    credentials: true,  // ✅ Allow cookies (JWT)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});


app.use("/api/auth", authRoutes);
app.use("/api/shortUrl", shortUrlRoutes );


app.get("/", (req, res) => {
    res.send("Hello, welcome to oukjkhkhkhr API!");
  });
app.get("/try", (req, res) => {
    res.send("You're trying hard! keep working!");
  });

module.exports = app; // 👈 Exporting the app
