const mongoose = require('mongoose');
const volunteer = mongoose.model('Volunteer');
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    volunteer.findOne({ username: username }, function(err, volunteer) {
      if (err) { return done(err); }
      if (!volunteer) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!volunteer.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, volunteer);
    });
  }
));

module.exports = passport;