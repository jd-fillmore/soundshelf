const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

const pool = require("./db");

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Server
const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Back-end is running on ${port}`);
});
