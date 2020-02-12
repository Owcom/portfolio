import React from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>

      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink exact to="/" className="toolbar_navigation-element">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="toolbar_navigation-element">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
