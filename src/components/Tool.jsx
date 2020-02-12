import React from "react";

const Toolbar = () => {
  return (
    <div>
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
      ;
    </div>
  );
};

export default Toolbar;
