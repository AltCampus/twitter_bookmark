import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    // this.props.history.push("/");
  };

  render() {
    var currentUser = this.props.currentUser;
    return (
      <>
        {currentUser ? (
          <>
            <Link to="/" className="btn btn-success m-5">
              {" "}
              Logged In
            </Link>
            <Link
              to="/"
              onClick={this.handleLogout}
              className="btn btn-success m-5">
              {" "}
              Logout
            </Link>
          </>
        ) : (
          ""
        )}
        {currentUser ? (
          ""
        ) : (
          <>
            <Link to="/login" className="btn btn_twitter m-5">
              {" "}
              Login
            </Link>
          </>
        )}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.userInfo,
  };
}
export default connect(mapStateToProps)(HomePage);
