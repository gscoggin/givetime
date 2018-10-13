const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
//const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;


//db.connect();

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});

