const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect(process.env.ATLAS_MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {console.error("Connection error", err); process.exit(1)});

}

module.exports = connectDB;