const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const dbconnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conexión exitosa a la base de datos.");
  } catch (error) {
    console.error("Hubo un error al conectarse a la base de datos: " + error);
  }
};

module.exports = dbconnect;
