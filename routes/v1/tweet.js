var express = require("express");
var router = express.Router();

const jwtAuth = require("../../modules/jwtAuth");
var tweetsController = require("../../controller/tweets.js");
/* GET users listing. */

router.get("/", tweetsController.listTweets);

router.get("/:id", tweetsController.showTweet);

module.exports = router;
