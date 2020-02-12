import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <NavLink exact to="/" className="toolbar_navigation-element">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className="toolbar_navigation-element">
          <li>About</li>
        </NavLink>{" "}
      </ul>
    </nav>
  );
};

export default sideDrawer;
