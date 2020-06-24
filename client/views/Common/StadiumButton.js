import React from "react";
import "../assets/stylesheets/common.scss";

function StadiumButton(props) {
  return <div className="rounded-pill circular_button">{props.name}</div>;
}

export default StadiumButton;
