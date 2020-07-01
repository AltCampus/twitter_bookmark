import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./auth/Login";

import "./assets/stylesheets/main.scss";
import Token from "./auth/Token";
import ListBookmarks from "./bookmarks/ListBookmarks.js";
import getUserInfo from "../redux/actions/userAction";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		if (localStorage["login-token"]) {
			this.props.dispatch(getUserInfo());
		}
	}

	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={ListBookmarks} />
					<Route exact path="/oauth/:token" component={Token} />
					<Route exact path="/login" component={Login} />
					<Route path="*" component={Login} />
				</Switch>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
	};
}

export default connect(mapStateToProps)(App);
