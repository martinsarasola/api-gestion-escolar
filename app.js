const express = require("express");
const routes = require("./routes/routes");
const dbconnect = require("./config/db");

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

dbconnect()
  .then(() => {
    app.listen(3000, () => {
      console.log(`El servidor está corriendo en el puerto ${3000}`);
    });
  })
  .catch((error) => {
    console.log("No se pudo conectar al servidor: " + error);
  });

module.exports = (req, res) => {
  app(req, res);
};
