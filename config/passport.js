const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users'); //grab our user model 
const keys = require('../config/keys');

const options = {}; // empty options hash 
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //where we goin get our webtoken from.. we want to extract it from the request from the auth header as bearer token. built-in method 
options.secretOrKey = keys.secretOrKey; //telling passport 



// module.exports = passport => {
//     passport.use(new JwtStrategy(options, (jwt_payload, done) => {
//         // This payload includes the items we specified earlier
//         console.log(jwt_payload);
//     }));
// };


// jwt payload is what we specified, done is a function that we invoke. pass things to our front end 

// module.exports = passport => {
//     passport.use(new JwtStrategy(options, (jwt_payload, done) => {
//         // This payload includes the items we specified earlier
//         console.log(jwt_payload);
//     }));
// };

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    // return the user to the frontend
                    return done(null, user);
                }
                // return false since there is no user
                return done(null, false);
            })
            .catch(err => console.log(err));
    }));
};

