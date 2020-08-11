"use strict";
const config = require("../../../modules/botconfig");
const twit = require("twit");
const Twitter = new twit(config.twitter);
const Tweet = require("../../../models/tweets.js");
const SinceId = require("../../../models/sinceId");
const { createUser } = require("../../../controller/users");

const getMentions = async () => {
	try {
		var sinceId = await SinceId.find({});

		var url = sinceId.length
			? `statuses/mentions_timeline.json?since_id=${sinceId[0].last_since_id}`
			: `statuses/mentions_timeline`;

		var res = await Twitter.get(url);
		var latestSinceId = res.data.length && res.data[0].id_str;

		if (!sinceId.length) {
			await SinceId.create({
				last_since_id: latestSinceId,
			});
		} else if (latestSinceId) {
			await SinceId.findByIdAndUpdate(
				sinceId[0]._id,
				{ last_since_id: latestSinceId },
				{ new: true }
			);
		}
		var bookmarks = res.data.filter((tweet) => validateBookmark(tweet));
		bookmarks.forEach(async (bookmark) => {
			var index = bookmark.text.split(" ").indexOf("addto");
			var category = bookmark.text.split(" ")[index + 1];
			var bookmarkTweet = await Twitter.get(
				`statuses/show.json?tweet_mode=extended&id=${bookmark.in_reply_to_status_id_str}`
			);

			var user;
			if (bookmarkTweet) {
				user = await createUser(bookmark.user, category);
			}
			var tweetBody = {
				authorId: user.id,
				tweet: bookmarkTweet.data,
				twitterUserId: bookmark.user.id_str,
				category: category,
			};

			await Tweet.create(tweetBody);
			// console.log(
			// 	"-------------------------------- -------------------------------------"
			// );
		});
	} catch (error) {
		console.log(error);
	}
};

function validateBookmark(tweet) {
	var status;
	var words = tweet.text.split(" ");
	if (
		words.includes("addto") &&
		words.indexOf("addto") - words.indexOf("@AltBot4") === 1 &&
		words[-1] !== "addto" &&
		words[-1] !== " "
	) {
		status = true;
	} else {
		status = false;
	}
	return status;
}

module.exports = getMentions;
