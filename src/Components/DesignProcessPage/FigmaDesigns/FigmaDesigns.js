import React from "react";
import "./FigmaDesigns.scss";
import Figma from "../../../assets/FigmaDesigns.jpg";

function FigmaDesigns() {
  return (
    <div className="designFigPage">
      <div className="designFigContainer">
        <div className="designFigContainer__imgBox">
          <img
            src={Figma}
            className="designFigContainer__imgBox__img"
            alt="Figma Designs"
          />
        </div>
        <div className="designFigContainer__textBox">
          <h2 className="designFigContainer__textBox__title">Figma Designs</h2>
          <p className="designFigContainer__textBox__txt">
            I then went into Figma and created a full design of my application.
            I made a mock up of the homepage, character display page and the
            modal page. I did the same for mobile as I knew I wanted this
            application to be fully responsive.
          </p>
          <p className="designFigContainer__textBox__txt">
            This process gave me an essential sense of clarity in terms of the
            design, components and style of the application before I even wrote
            a line of code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FigmaDesigns;
