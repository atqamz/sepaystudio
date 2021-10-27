// Config
const path = require("path");
const config = require("./config");

const { MONGO_URI, MONGO_DB_NAME, NODE_ENV } = config;

// API Route
const contactRouter = require("./routes/api/contact.api");
const productRouter = require("./routes/api/product.api");

// Depedencies imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Server init
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database init
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;
const dbInit = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(db, dbInit)
  .then(() => {
    console.log("Connected to MongoDB Atlas...");
  })
  .catch((err) => {
    console.log(err);
  });

// API Route
app.use("/api/contacts", contactRouter);
app.use("/api/products", productRouter);

// Production config
if (NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // Client Route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
