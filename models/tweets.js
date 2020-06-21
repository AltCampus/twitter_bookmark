var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tweetSchema = new Schema(
	{
		authorId: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		category: {
			type: String,
			required: true,
		},
		tweet: {
			type: Object,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);
