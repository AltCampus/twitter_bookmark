const Tweet = require("../models/tweets.js");

module.exports = {
	listTweets: async (req, res, next) => {
		try {
			const tweets = await Tweet.find({});
			if (!tweets.length) {
				return res
					.status(404)
					.json({ success: false, message: "No Bookmarked Tweets" });
			}
			res.status(200).json({ tweets });
		} catch (error) {
			next(error);
		}
	},

	showTweet: async (req, res, next) => {
		const tweetId = req.params.id;
		try {
			const tweet = await Tweet.findById(tweetId);
			if (!tweet) {
				return res
					.status(404)
					.json({ success: false, message: "Tweet Not Found" });
			}
			res.status(200).json({ success: true, tweet });
		} catch (error) {
			next(error);
		}
	},
};
