import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./homepage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {console.log("inside app js")}
        <Switch>
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
