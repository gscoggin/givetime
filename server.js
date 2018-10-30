const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const passport = require('passport')
var session = require("express-session")
var cookieParser = require('cookie-parser');

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(session({ 
//   secret: "cats", 
//   name: "cats",
//   // store: "sessionStore", 
//   // connect-mongo session store
//   proxy: true,
//   resave: true,
//   saveUninitialized: true
//   }));
app.use(passport.initialize());
app.use(passport.session({ 
  secret: "cats", 
  name: "cats",
  // store: "sessionStore", 
  // connect-mongo session store
  proxy: true,
  resave: true,
  saveUninitialized: true
  }));
app.use(cors());

app.use(cookieParser());

if (isProduction === true) {
  app.use(express.static("client/build"));
}

// Configure mongoose to connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/give_time", { useNewUrlParser: true });

app.use(routes);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});

