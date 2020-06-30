import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";

import StadiumButton from "../Common/StadiumButton.js";
import Card from "../tweetCard/card.js";
import Avatar from "../tweetCard/avatar.js";
import getTweets from "../../redux/actions/bookmarkAction";

class ListBookmarks extends Component {
	handleLogout = () => {
		console.log("logout");
		localStorage.clear();
		this.props.history.push("/login");
	};
	handleClick = (name) => {
		this.props.dispatch({ type: "CHANGE_CATEGORY", payload: name });
	};
	componentDidMount() {
		if (localStorage["login-token"]) {
			this.props.dispatch(getTweets());
		}
	}
	render() {
		var userInfo = !this.props.user.isAuthReqInProgress
			? this.props.user.userInfo
			: "null";
		return (
			<>
				{userInfo ? (
					<div className="container">
						<div className="bookmarks-container">
							<div className="category-container">
								<Avatar
									imageURL={userInfo.image}
									name={userInfo.name}
									screenName={userInfo.handle}
								/>
								<h2 className="heading mt-4 text-center">
									Categories
								</h2>
								<div className="categories">
									{userInfo.categories &&
										userInfo.categories.map((category) => {
											return (
												<StadiumButton
													selectCategory={
														this.handleClick
													}
													name={category}
												/>
											);
										})}
									<StadiumButton
										selectCategory={this.handleClick}
										name="ALL"
									/>
								</div>
								<div
									className="logout pt-4"
									onClick={this.handleLogout}
								>
									{" "}
									<AiOutlineLogout className="mr-2" />
									Logout
								</div>
							</div>
							<div className="tweets-container">
								<div className="row row-cols-1">
									{this.props.tweets
										? this.props.tweets.map((tweet) => {
												return <Card {...tweet} />;
										  })
										: ""}
								</div>
							</div>
						</div>
					</div>
				) : (
					"loading"
				)}
			</>
		);
	}
}
function filterByCategory(tweets, category) {
	if (category !== "ALL") {
		var filteredTweets = tweets.filter(
			(tweet) => tweet.category === category
		);
		return filteredTweets;
	}
	return tweets;
}

function mapStateToProps(state) {
	return {
		user: state.currentUser,
		activeCategory: state.tweets.activeCategory,
		tweets: filterByCategory(
			state.tweets.tweets,
			state.tweets.activeCategory
		),
	};
}
export default connect(mapStateToProps)(ListBookmarks);
