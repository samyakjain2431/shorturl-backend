const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect("mongodb://localhost:27017/newDB")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {console.error("Connection error", err); process.exit(1)});

}

module.exports = connectDB;