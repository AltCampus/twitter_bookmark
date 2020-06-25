import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import StadiumButton from "../Common/StadiumButton.js";
import Card from "../tweetCard/card.js";
import Avatar from "../tweetCard/avatar.js";
import getTweets from "../../redux/actions/bookmarkAction";

class ListBookmarks extends Component {
	handleClick = (name) => {
		this.props.dispatch({ type: "CHANGE_CATEGORY", category: name });
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
													key={uuid()}
												/>
											);
										})}
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
		tweets: filterByCategory(
			state.tweets.tweets,
			state.tweets.activeCategory
		),
	};
}
export default connect(mapStateToProps)(ListBookmarks);
