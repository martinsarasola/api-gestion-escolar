const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const dbconnect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      connectTimeoutMS: 5000,
      socketTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });
    console.log("Conexión con la base de datos exitosa");
  } catch (error) {
    console.error("Hubo un error al conectar a la base de datos:", error);
    throw error;
  }
};

module.exports = dbconnect;
