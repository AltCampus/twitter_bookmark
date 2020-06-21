"use strict";
const config = require("../../../modules/botconfig");
const twit = require("twit");
const Twitter = new twit(config.twitter);

const getMentions = async (next) => {
	try {
		var res = await Twitter.get("statuses/mentions_timeline");
		var bookmarks = res.data.filter((tweet) => {
			validateBookmark(tweet);
		});
		console.log(bookmarks);
	} catch (error) {
		next(error);
	}
};
// function validateBookmark(tweet) {
// 	var words = tweet.text.split(" ");
// 	if (words.includes("testing")) {
// 		console.log(words);
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

module.exports = getMentions;

// Twitter.get(
//   `statuses/show.json?id=${data[0].in_reply_to_status_id_str}`,
//   (err, res) => {
//     console.log(
//       "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
//     );
//     if (err) {
//       console.log(err);
//     } else if (res) {
//       console.log(
//         res,
//         "--------------------------------------------------------"
//       );
//     }
//   }
// );
