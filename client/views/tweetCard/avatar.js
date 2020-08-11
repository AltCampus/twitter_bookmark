import React from "react";

const Avatar = ({ imageURL, name, screenName }) => {
  return (
    <div className="avatar_container">
      <div className="">
        <img className="rounded-circle" src={imageURL} alt={name} />
      </div>
      <div className="ml-3 user_name">
        <p className="font-weight-bold ">{name}</p>
        <div className="user_handle">
          <span>{`@${screenName}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
