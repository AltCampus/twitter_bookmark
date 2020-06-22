var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sinceIdSchema = new Schema({
	last_since_id: { type: String },
});

module.exports = mongoose.model("SinceId", sinceIdSchema);
