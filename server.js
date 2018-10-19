const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const mongoose = require("mongoose");
//const routes = require("./routes");
// required for authentication (trying it out at least)
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//added to make authentication check work
app.use(cors());
app.use(require('morgan')('dev'));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if (isProduction) {
  app.use(express.static("client/build"));
}
//TODO Not sure if this is needed, or can be combined with the above if statement. 
if(!isProduction) {
  app.use(errorHandler());
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/give_time"
);
mongoose.set('debug', true);

//Error handlers & middlewares
if(!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});


app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});

