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
const express = require("express");
const routes = require("./routes/routes");
const dbconnect = require("./config/db");

const app = express();

app.use(express.json());
app.use(routes);

// Connect to database once
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;

  await dbconnect();
  isConnected = true;
};

// Handle connection before processing requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Remove the app.listen() call since it's not needed in serverless

module.exports = app;
