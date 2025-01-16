const express = require("express");
const routes = require("./routes/routes");
const dbconnect = require("./config/db");

const app = express();

app.use(express.json());
app.use("/api", routes);

dbconnect()
  .then(() => {
    console.log("Conexión con la base de datos exitosa");
  })
  .catch((error) => {
    console.error("Hubo un error al conectar a la base de datos:", error);
  });

module.exports = (req, res) => {
  app(req, res);
};
