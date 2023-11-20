const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(process.env.DB_URI);
    console.log(
      `Database connected! DB HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database connection error!!", error.message);
  }
}

module.exports = connectDB;
