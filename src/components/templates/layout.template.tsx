import React from "react";
import { Affix } from "antd";
import NavBarMobile from "../nav-bar/nav-bar-mobile";
import { Outlet } from "react-router-dom";
import withConfigProvider from "./hoc/with-config-provider-nav-mob";
import { configNavMob } from "./constants/config";
import CSS from "./layout.template.module.scss";
import NavBarDesktop from "../nav-bar/nav-bar-desktop";

const NavBarMobileWithConfig = withConfigProvider(NavBarMobile, configNavMob);

const LayoutTemplate = () => {
  return (
    <div>
      <div className={`${CSS.mobileView} ${CSS.cs_sticky_nav}`}>
        <NavBarMobileWithConfig />
      </div>

      <div className={CSS.desktopView}>
        <NavBarDesktop />
      </div>

      <div>
        <div style={{ background: "#06bbcc63", height: "800px" }}>WIP</div>

        <Outlet />
      </div>
    </div>
  );
};

export default LayoutTemplate;
