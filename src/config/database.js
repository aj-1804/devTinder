const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://devtinder:ZUGB3SdGYdSakiOi@cluster0.hlhd8zo.mongodb.net/devtinder?appName=Cluster0",
  );
};

module.exports = connectDB;
