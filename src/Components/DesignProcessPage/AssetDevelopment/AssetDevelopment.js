import React from "react";
import Asset from "../../../assets/AssetDevelopment.jpg";
import "./AssetDevelopment.scss";

function AssetDevelopment() {
  return (
    <div className="designLeftPage">
      <div className="designLeftContainer">
        <div className="designLeftContainer__textBox">
          <h2 className="designLeftContainer__textBox__title">
            Asset Development
          </h2>
          <p className="designLeftContainer__textBox__txt">
            The next step was to create a series of art assets for use in my
            application. I wanted randomly generated Final Fantasy characters as
            a background for the application on every page refresh. I painted
            out the backgrounds on various official character posters and
            converted them to transparent PNGs.
          </p>
          <p className="designLeftContainer__textBox__txt">
            I also designed and created the title banner that would sit at the
            top of the application.
          </p>
        </div>
        <div className="designLeftContainer__imgBox">
          <img
            src={Asset}
            className="designLeftContainer__imgBox__img"
            alt="Asset Development"
          />
        </div>
      </div>
    </div>
  );
}

export default AssetDevelopment;
