import React, { Component } from "react";
import Button from "../Common/Button.js";
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
								<Button name={"Education"} />
								<Button name={"Sports"} />
								<Button name={"Productivity"} />
								<Button name={"Technology"} />
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
