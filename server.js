const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// requires the content in the models folder
const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route that calls the the home page
app.use(express.static("public"));

// route for the exercise page
app.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/exercise.html"));
});
// route for the stats page
app.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
