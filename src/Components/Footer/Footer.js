import React from "react";
import "./Footer.scss";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer({ scrollToHome }) {
  return (
    <div className="footerWrapper">
      <div onClick={scrollToHome} className="footerBtn">
        <div className="footerBtn__arrows">
          <IoIosArrowUp className="arrow" />
          <IoIosArrowUp className="arrow" />
        </div>
      </div>
      <div className="footerBar">
        <AiOutlineCopyright className="footerBar__logo" />
        <span className="footerBar__name">QASIM HUSSAIN 2022</span>
      </div>
    </div>
  );
}

export default Footer;
