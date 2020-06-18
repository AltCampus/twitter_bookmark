var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: String,
    twitterHandle: String,
    email: String,
    twitterToken: String,
    categories: ["Education", "Sports", "Self Help"],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
