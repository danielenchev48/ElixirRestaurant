const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URL;

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successful connection to database");
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = connectDB;
