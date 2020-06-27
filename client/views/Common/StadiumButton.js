import React from "react";
import { v4 as uuid } from "uuid";

import "../assets/stylesheets/common.scss";

function StadiumButton(props) {
  return (
    <div
      key={uuid()}
      onClick={() => props.selectCategory(props.name)}
      className="rounded-pill circular_button">
      {props.name}
    </div>
  );
}

export default StadiumButton;
