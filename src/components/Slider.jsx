import React, { Component } from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import "../index.css";
export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    let divStyle = {
      display: "none"
    };
    return (
      <div>
        <Fade bottom count={1}>
          <Slider {...settings} className="slider">
            <div>
              <h3>Design</h3>
              <p className="description">Modern design</p>
            </div>
            <div>
              <h3>Development</h3>
              <p className="description">Modern design</p>
            </div>
            <div style={divStyle}>
              <h3>Responsive</h3>
              <p className="description">
                Mobile friendly design makes your accesible to everybody.
              </p>
            </div>
            <div>
              <h3>Interactive</h3>
              <p className="description">I love making pages come to life.</p>
            </div>
            <div>
              <h3>Intuitive</h3>
              <p className="description">easy to navigate </p>
            </div>
            <div>
              <h3>SEO</h3>
              <p className="description">easy to navigate </p>
            </div>
          </Slider>
        </Fade>
      </div>
    );
  }
}
