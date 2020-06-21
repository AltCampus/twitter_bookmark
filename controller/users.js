var User = require("../models/user");

getUserDetails = async (req, res, next) => {
	// console.log(req.userId);
	var user = await User.findById(req.userId);
	if (!user) {
		res.status(404).json({ message: "user not found" });
	}
	console.log(user);
	res.status(200).json({ user, message: "success" });
};

module.exports = { getUserDetails };
