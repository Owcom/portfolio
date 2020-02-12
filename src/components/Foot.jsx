import React from "react";
import "../index.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
const Footer = () => {
  return (
    <div className="foot">
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
  );
};

export default Footer;
