import React from "react";
import NavBar from "./nav-bar";
import CSS from "./nav-bar-desktop.module.scss";
import NavInfoBar from "./nav-info-bar";

const NavBarDesktop = () => {
  return (
    <div>
      <NavInfoBar />

      <NavBar />
    </div>
  );
};

export default NavBarDesktop;
