import React, { Component } from "react";
import StadiumButton from "../Common/StadiumButton.js";
import "../assets/stylesheets/bookmarks.scss";

class ListBookmarks extends Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="bookmarks-container">
						<div className="category-container">
							<h2 className="heading">Categories</h2>
							<div className="categories">
								<StadiumButton name={"Education"} />
								<StadiumButton name={"Sports"} />
								<StadiumButton name={"Productivity"} />
								<StadiumButton name={"Technology"} />
							</div>
						</div>
						<div className="tweets-container">tweets</div>
					</div>
				</div>
			</>
		);
	}
}
export default ListBookmarks;
