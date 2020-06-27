import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./Homepage";
import Login from "./auth/Login";

import List from "./auth/List";
import "./assets/stylesheets/main.scss";
import Token from "./auth/Token";
import ListBookmarks from "./bookmarks/ListBookmarks.js";
import getUserInfo from "../redux/actions/userAction";

import Card from "./tweetCard/card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (localStorage["login-token"]) {
      this.props.dispatch(getUserInfo());
      // this.props.dispatch(getTweets());
    }
  }

  render() {
    return (
      <div className="App">
        {}
        <Switch>
          <Route exact path="/" component={ListBookmarks} />
          <Route exact path="/oauth/:token" component={Token} />
          <Route exact path="/login" component={Login} />
          <Route exact path="*" component={Login} />
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
