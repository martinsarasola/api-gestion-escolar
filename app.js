const express = require("express");
const routes = require("./routes/routes");
const dbconnect = require("./config/db");

const app = express();

app.use(express.json());

app.use(routes);

dbconnect();

app.listen(3000, (req, res) => {
  console.log("Servidor corriendo en puerto 3000");
});
