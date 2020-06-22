var express = require("express");
var router = express.Router();
var passport = require("passport");
// var Auth = require("../../modules/twitterAuth");
const jwtAuth = require("../../modules/jwtAuth");
var userController = require("../../controller/users");
/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

router.get("/auth/twitter", passport.authenticate("twitter"));

router.get(
	"/auth/twitter/callback",
	passport.authenticate("twitter", {
		failureRedirect: "/",
	}),
	async function (req, res) {
		console.log(req.user);
		var token = await jwtAuth.geneateJWT(req.user);
		console.log(token, "token");
		res.redirect(`/oauth/${token}`);
	}
);
router.get("/info", jwtAuth.userAuth, userController.getUserDetails);
module.exports = router;
