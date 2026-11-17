require("dotenv").config();
const express = require("express");
// const { dbConfig } = require("./config/db");

const app = express();

// dbConfig();

const router = require("./router");

app.use(express.json());
app.use(router);

module.exports = app;
