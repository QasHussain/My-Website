import React from "react";
import "./DesignFooter.scss";

function DesignFooter() {
  const closeWindow = () => {
    window.close();
  };

  return (
    <div className="designFooterWrapper">
      <div className="designFooterBtn">
        <div onClick={closeWindow} className="designFooterBtn__txt">
          BACK TO WEBSITE
        </div>
      </div>
      <div className="designFooterBar"></div>
    </div>
  );
}

export default DesignFooter;
