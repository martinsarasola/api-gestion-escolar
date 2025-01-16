const express = require("express");
const routes = require("./routes/routes");
const dbconnect = require("./config/db");

const app = express();

app.use(express.json());
app.use(routes);

let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;

  await dbconnect();
  isConnected = true;
};

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

module.exports = app;
