var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
	{
		name: String,
		handle: String,
		image: String,
		bannerImage: String,
		twitterUserId: String,
		categories: {
			type: Array,
			default: ["Education", "Sports", "Self Help"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
