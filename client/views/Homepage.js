import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var currentUser = this.props.currentUser;
    return (
      <>
        {currentUser ? <a className="btn btn-success m-5"> Logged In</a> : ""}
        {currentUser ? (
          ""
        ) : (
          <Link to="/login" className="btn btn-success m-5">
            {" "}
            Login
          </Link>
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
