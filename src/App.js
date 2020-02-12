import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Start from "./components/Start";
import About from "./components/About";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <div style={{ height: "5%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>
        <Switch>
          <Route path="/about" component={About} />

          <Route path="/home" exact component={Start} />
          <Route path="/" exact component={Start} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
