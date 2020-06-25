import React from "react";
import "../assets/stylesheets/common.scss";

function StadiumButton(props) {
	return (
		<div
			onClick={() => props.selectCategory(props.name)}
			className="rounded-pill circular_button"
		>
			{props.name}
		</div>
	);
}

export default StadiumButton;
