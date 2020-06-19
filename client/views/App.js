import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./Homepage";
import Login from "./auth/Login";
import "./assets/stylesheets/main.scss";
import Token from "./auth/Token";
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
        {console.log("inside app js")}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/oauth/:token" component={Token} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);