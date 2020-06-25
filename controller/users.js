var User = require("../models/user");

getUserDetails = async (req, res, next) => {
	var user = await User.findOne({ twitterUserId: req.twitterUserId });
	if (!user) {
		res.status(404).json({ message: "user not found" });
	}
	res.status(200).json({ user, message: "success" });
};

createUser = async (user, category) => {
	var findUser = await User.findOne({ twitterUserId: user.id_str });
	if (!findUser) {
		var userBody = {
			name: user.name,
			handle: user.screen_name,
			image: user.profile_image_url_https,
			bannerImage: user.profile_banner_url,
			twitterUserId: user.id_str,
		};
		var user = await new User(userBody);
		user.categories.push(category);
		await user.save();
		console.log(user);
		return user;
	} else if (!findUser.categories.includes(category)) {
		findUser.categories.push(category);
		findUser = await findUser.save();
	}
	return findUser;
};

module.exports = { getUserDetails, createUser };
