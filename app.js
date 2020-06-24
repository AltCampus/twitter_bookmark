var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("passport");
var cors = require("cors");
var session = require("express-session");

require("dotenv").config();
var config = require("./modules/botconfig");
var getMentions = require("./routes/v1/bot/main.js");

var indexRouter = require("./routes/v1/index");
var usersRouter = require("./routes/v1/users");
var tweetsRouter = require("./routes/v1/tweet");

var app = express();

// Webpack Configuration
if (process.env.NODE_ENV === "development") {
	const webpack = require("webpack");
	const webpackConfig = require("./webpack.config");
	const compiler = webpack(webpackConfig);

	app.use(
		require("webpack-dev-middleware")(compiler, {
			noInfo: true,
			publicPath: webpackConfig.output.publicPath,
		})
	);

	app.use(require("webpack-hot-middleware")(compiler));
}

require("./modules/twitterAuth");
// connect to database
mongoose.connect(
	"mongodb://localhost/twitterBookmarked",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	(err) => {
		console.log(err ? err : "connected to db");
	}
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("trust proxy", true);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(cors());

app.use(
	session({
		secret: process.env.SECRET,
	})
);

app.use(passport.initialize());

// setInterval(getMentions, 60000);

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tweets", tweetsRouter);

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	if (err.name == "ValidationError") {
		res.status(400).json({ err: { body: [err.message] } });
	}
	if (err.name == "JsonWebTokenError") {
		res.status(400).json({ err: { body: [err.message] } });
	}
	if (err.name == "MongoError") {
		res.status(400).json({ err: { body: [err.errmsg] } });
	}
	if (err.message == "Not Found") {
		res.status(404).json({ err: { body: [err.message] } });
	}
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	console.log(err);
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
