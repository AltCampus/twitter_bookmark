import React from "react";
import "../assets/stylesheets/common.scss";

function Button(props) {
	return <div className="circular_button">{props.name}</div>;
}

export default Button;
