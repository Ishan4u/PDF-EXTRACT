const express = require("express");
const fileupload = require("express-fileupload");
const pdfParse = require("pdf-parse");

const app = express();

app.use("/", express.static("public"));

app.listen(3000);
