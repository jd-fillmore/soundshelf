const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");

const albumRouter = require("./routes/albumRoutes");

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/album", albumRouter);

// Server
const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Back-end is running on ${port}`);
});
