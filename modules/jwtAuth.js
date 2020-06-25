var jwt = require("jsonwebtoken");

module.exports = {
	geneateJWT: async (user) => {
		try {
			var payload = {
				userId: user._id,
				twitterUserId: user.twitterUserId,
			};
			var token = await jwt.sign(payload, process.env.SECRET);
			return token;
		} catch (error) {
			next(error);
		}
	},
	userAuth: async (req, res, next) => {
		var token = req.headers["authorization"] || "";
		// console.log(token, "herders log inside userauth");
		try {
			if (token) {
				var payload = await jwt.verify(token, process.env.SECRET);
				req.userId = payload.userId;
				req.twitterUserId = payload.twitterUserId;
				next();
			} else {
				res.status(400).json({ err: "token required" });
			}
		} catch (error) {
			next(error);
		}
	},
};
