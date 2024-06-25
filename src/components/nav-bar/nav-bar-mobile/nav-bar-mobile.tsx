import React, { useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse, Typography } from "antd";
import Logo from "../../../static/images/logo/MOC_L2.jpg";
import CSS from "./nav-bar-mobile.module.scss";

const NavBarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentActive, setCurrentActive] = useState("Home");
  const [activeItemArr, setActiveItemArr] = useState<string | string[]>([]);

  const handleActiveMenu = (active: string) => {
    setCurrentActive(active);
    setShowMenu(!showMenu);
    setActiveItemArr([]);
  };

  const getMenuItem = () => {
    return (
      <div>
        <div className={CSS.cs_top_menu}>
          <Typography.Title
            onClick={() => handleActiveMenu("Home")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "Home" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            Home
          </Typography.Title>
        </div>

        <div className={CSS.cs_top_menu}>
          <Typography.Title
            onClick={() => handleActiveMenu("About")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "About" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            About
          </Typography.Title>
        </div>

        <div className={CSS.cs_top_menu}>
          <Typography.Title
            onClick={() => handleActiveMenu("Courses")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "Courses" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            Courses
          </Typography.Title>
        </div>

        <div className={CSS.cs_top_menu}>
          <Typography.Title
            onClick={() => handleActiveMenu("Contact")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "Contact" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            Contact
          </Typography.Title>
        </div>
      </div>
    );
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div
          onClick={(e) => e.stopPropagation()}
          className={CSS.cs_logo_container_mob}
        >
          <img className={CSS.cs_logo_mob} src={Logo} />
        </div>
      ),
      children: getMenuItem(),
    },
  ];

  const handleBurgerIcon = (value: boolean) => {
    setShowMenu(value);
    if (value) {
      setActiveItemArr(["1"]);
    } else {
      setActiveItemArr([]);
    }
  };
  return (
    <Collapse
      collapsible="disabled"
      accordion={showMenu}
      expandIconPosition="end"
      expandIcon={() =>
        !showMenu ? (
          <div>
            <svg
              onClick={() => handleBurgerIcon(true)}
              aria-hidden="true"
              role="presentation"
              className={CSS.burger_icon}
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
            </svg>
          </div>
        ) : (
          <svg
            onClick={() => handleBurgerIcon(false)}
            aria-hidden="true"
            role="presentation"
            className={CSS.burger_icon}
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
          </svg>
        )
      }
      className={CSS.cs_mob_nav_header}
      onChange={(e: string | string[]) => {
        setActiveItemArr(e);
      }}
      activeKey={activeItemArr}
      ghost
      items={items}
    />
  );
};

export default NavBarMobile;
