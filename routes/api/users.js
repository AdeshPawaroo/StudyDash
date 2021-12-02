const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => {
    res.json({ msg: "This is the user route" })
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    handle: req.user.handle,
    email: req.user.email
  });
})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          // Throw a 400 error if the email address already exists
          return res.status(400).json({email: "A user has already registered with this address"})
        } else {
          // Otherwise create a new user
          const newUser = new User({
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password
          })
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
          })
        }
      })
  })

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({email})
      .then(user => {
        if (!user) {
          return res.status(404).json({email: 'This user does not exist'});
        }
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
                let days = user.daysLoggedIn;
                const currentDate = new Date()
                const date = new Date(user.date)
                days = Math.round((currentDate.getTime() - date.getTime()) / 86400000) + 1
                
                const payload = {
                    id: user.id,
                    handle: user.handle,
                    email: user.email,
                    date: user.date,
                    daysLoggedIn: days,
                    lastLogin: new Date(),
                    timeStudied: user.timeStudied
                }
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                )
            } else {
              return res.status(400).json({password: 'Incorrect password'});
            }
          })
      })
  }
)

router.patch('/:user_id', (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    user.timeStudied = req.body.timeStudied;
    user.save();
  })
})

//FIND ALL -- SORTS BY DATE
router.get("/", (req, res) => {
  User
      .find()
      .sort({ date: -1 })
      .then(users => res.json(users))
      .catch(err => res.status(400).json(err));
});

module.exports = router;