import React from "react";
import "../index.css";
import Middle from "./Middle";
import Footer from "./Footer";
import Card from "./Parallax/Parallax";
import About from "./About";
const Start = props => {
  console.log(props);

  return (
    <div id="start">
      <div className="card">
        <Card />
      </div>
      <Middle />
      <About />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Start;
