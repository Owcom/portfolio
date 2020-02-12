import React from "react";
import "../index.css";
import Fade from "react-reveal/Fade";

import FavoriteIcon from "@material-ui/icons/Favorite";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <span className="footer__text">
          <Fade>Looking for a designer & user interface developer?</Fade>
        </span>
        <span className="footer__link">
          <Fade>
            <a href="mailto:pawelaugustyniakk@gmail.com">Let's chat</a>
          </Fade>
        </span>
      </div>
      <div className="footer__bottom">
        <section>
          <span>Created with&nbsp;&nbsp;</span>
          <span className="icon">
            <FavoriteIcon />
          </span>
        </section>
        <span className="footer__spacer" />
        <span>
          <a href="mailto:pawelaugustyniakk@gmail.com">
            pawelaugustyniakk@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
