const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const volunteerController = require('../controllers/volunteerController');
const auth = require('./auth');
const Users = mongoose.model('Users');
const Passport = require('../config/passport');

// router.post('/register', auth.optional, (req, res, next) => {
//   console.log(res)
// });
//POST new user route (optional, everyone has access)
// router.post('/register',
//   passport.authenticate('local', 
//   { successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true })
// );

// router.post('/signin',
//   passport.authenticate('local', { successRedirect: '/',
//   failureRedirect: '/signin',
//   failureFlash: true })
// );

router.post('/signin', passport.authenticate('local', { 
  // comment out line 27 to see the response object from the validation. 
  successRedirect: 'http://localhost:3000/eventfeed',
  failureRedirect: '/?error=LoginError', failureFlash: true }), (req, res, next) => {
  // console.log('/login handler', req.session);
  // req.session.save((err) => {
  //     if (err) {
  //         return next(err);
  //     }

  //     res.status(200).send('OK');
  // });
  console.log("Hey this is your request ", req);
  res.send(req.user)
});

router.post('/api/signin', function(req, res, next) {
  console.log("hi george");
});


// router.post('/signup', function(req, res, next) {
//   console.log(req.body.username);
// })


router
  .route("/signup")
  .post(volunteerController.create);

// router
//   .route("/users")
//   .get(volunteerController.findAll);

router.post('/', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user }, session } = req;
  console.log(session);

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
});

module.exports = router;