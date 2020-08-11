var passport = require("passport");
var TwitterStrategy = require("passport-twitter").Strategy;
var User = require("../models/user");

passport.use(
	new TwitterStrategy(
		{
			consumerKey: process.env.TWITTER_CONSUMER_KEY,
			consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
			callbackURL:
				"http://localhost:3000/api/v1/users/auth/twitter/callback",
		},
		function (token, tokenSecret, profile, cb) {
			var details = profile._json;
			User.findOne({ twitterUserId: details.id_str }, (error, user) => {
				if (user) {
					return cb(error, user);
				} else {
					var user = {
						name: details.name,
						handle: details.screen_name,
						twitterUserId: details.id_str,
						image: details.profile_image_url_https,
						bannerImage: details.profile_banner_url,
					};
					User.create(user, (err, user) => {
						return cb(error, user);
					});
				}
			});
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});
