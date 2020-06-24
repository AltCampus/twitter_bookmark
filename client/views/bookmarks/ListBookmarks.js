import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

import StadiumButton from "../Common/StadiumButton.js";
import "../assets/stylesheets/bookmarks.scss";
import Card from "../tweetCard/card.js";
import Avatar from "../tweetCard/avatar.js";

class ListBookmarks extends Component {
  render() {
    // console.log(this.props);
    var userInfo = !this.props.user.isAuthReqInProgress
      ? this.props.user.userInfo
      : "null";
    console.log(this.props.user.userInfo);
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
                <h2 className="heading mt-4 text-left">Categories</h2>
                <div className="categories">
                  {userInfo.categories &&
                    userInfo.categories.map((category) => {
                      return <StadiumButton name={category} key={uuid()} />;
                    })}
                </div>
              </div>
              <div className="tweets-container">
                <Card />
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

function mapStateToProps(state) {
  return {
    user: state.currentUser,
  };
}
export default connect(mapStateToProps)(ListBookmarks);
