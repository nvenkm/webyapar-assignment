const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

//EXPRESS MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

module.exports = app;
