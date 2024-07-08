import React, { useEffect } from "react";
import { Affix } from "antd";
import NavBarMobile from "../nav-bar/nav-bar-mobile";
import { Outlet } from "react-router-dom";
import withConfigProvider from "./hoc/with-config-provider-nav-mob";
import { configNavMob } from "./constants/config";
import CSS from "./layout.template.module.scss";
import NavBarDesktop from "../nav-bar/nav-bar-desktop";
import classNames from "classnames";
import Footer from "../footer/footer";
import { Fade, Reveal } from "react-awesome-reveal";

const NavBarMobileWithConfig = withConfigProvider(NavBarMobile, configNavMob);

const LayoutTemplate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-bg-primary">
      <Reveal triggerOnce>
        <div className={`${CSS.mobileView} ${CSS.cs_sticky_nav}`}>
          <NavBarMobileWithConfig />
        </div>

        <div className={classNames(CSS.desktopView, CSS.cs_sticky_nav)}>
          <NavBarDesktop />
        </div>
        <div>
          <Outlet />
        </div>
        <div className={classNames(CSS.footer_container)}>
          <Footer />
        </div>
      </Reveal>
    </div>
  );
};

export default LayoutTemplate;
