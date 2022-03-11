import React from "react";
import "./Background.scss";

function Background(props) {
  return (
    <div>
      <div className="background">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      {props.children}
    </div>
  );
}

export default Background;
