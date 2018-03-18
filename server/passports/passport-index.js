const passport = require("passport");

passport.serializeUser(function(user, callback) {
  callback(null, user);
});

passport.deserializeUser(function(user, callback) {
  callback(null, user);
});

const Strategy = require("passport-twitter").Strategy;

const User = require("../models/users");

passport.use(
  new Strategy(
    {
      consumerKey: "Yh3Yt5RocWmvCGOZyt4RGbt3S",
      consumerSecret: "0llu91DlPmrCGIiH6IlvdjX6EMT5Llwxc4I1oTLjwIjvucfUKo",
      callbackURL: "/auth/twitter/callback"
    },
    function(token, tokenSecret, profile, callback) {
      User.findOne({ twitterID: profile.id }, function(err, user) {
        if (!user) {
          let newUser = new User({
            twitterID: profile.id
          });
          newUser.save();
        }
        return callback(err, user);
      });
    }
  )
);

module.exports = passport;
