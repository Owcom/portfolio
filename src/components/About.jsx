import React from "react";
import "../index.css";
import Foot from "./Foot";
const About = () => {
  return (
    <div>
      <div className="about">
        <div className="aboutContainer">
          <h1>About me</h1>
          I'm a freelancer web designer / developer from Poland. I love making
          UI effects, animations and creating intuitive, dynamic user
          experiences.
          <button className="btn">
            {" "}
            <a href="mailto:pawelaugustyniakk@gmail.com">Get in touch</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
