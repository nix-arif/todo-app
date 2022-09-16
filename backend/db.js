const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGODB_URL = process.env.CONNECTION_STRING;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    const app = require("./app");
    app.listen(5000);
    console.log("db connected");
  })
  .catch();
