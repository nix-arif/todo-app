const express = require("express");
const cors = require("cors");

const app = express();
const router = require("./router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/todos", router);

module.exports = app;
