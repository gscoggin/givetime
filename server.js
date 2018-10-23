const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const mongoose = require("mongoose");
//const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/give_time"
);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});



