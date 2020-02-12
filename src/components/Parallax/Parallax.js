import React from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";
import Fade from "react-reveal/Fade";
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  return (
    <div className="main">
      <div
        class="container"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          class="card1"
          style={{ transform: props.xy.interpolate(trans1) }}
        >
          <Fade bottom>
            <h1 className="name first">Hi, my name is Paweł Augustyniak</h1>
          </Fade>
          <Fade bottom delay="250">
            {" "}
            <h3 className="name">Front-end/ UI Developer</h3>
          </Fade>
        </animated.div>
      </div>
    </div>
  );
}

export default Card;
