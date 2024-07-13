import React, { useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse, Typography } from "antd";
import Logo from "../../../static/images/logo/MOC_L2.jpg";
import CSS from "./nav-bar-mobile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const NavBarMobile = () => {
  const navigate = useNavigate();

  const handleNavigate = (value: string) => {
    navigate(value);
  };

  const [showMenu, setShowMenu] = useState(false);
  const [currentActive, setCurrentActive] = useState("Home");
  const [activeItemArr, setActiveItemArr] = useState<string | string[]>([]);
  const [isCourseExpand, setIsCourseExpand] = useState<boolean>(false);
  const [isCountryExpanded, setIsCountryExpanded] = useState<boolean>(false);

  const handleActiveMenu = (active: string) => {
    handleNavigate(active);
    setCurrentActive(active);
    setShowMenu(!showMenu);
    setActiveItemArr([]);
  };

  const getCoursesList = () => {
    return (
      <div>
        <div className={CSS.cs_top_menu}>
          <Typography.Title
            onClick={() => handleActiveMenu("/courses/medical")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "/courses/medical" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            Medical
          </Typography.Title>
        </div>
      </div>
    );
  };

  const getCountryList = () => {
    return (
      <div>
        <div className={CSS.cs_top_menu}>
          <Typography.Title
            onClick={() => handleActiveMenu("/countries/Russia")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "Russia" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            Russia
          </Typography.Title>
          <Typography.Title
            onClick={() => handleActiveMenu("/countries/Kyrgyzstan")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "Russia" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            Kyrgyzstan
          </Typography.Title>
          <Typography.Title
            onClick={() => handleActiveMenu("countries/kazakhstan")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "Russia" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            Kazakhstan
          </Typography.Title>
        </div>
      </div>
    );
  };

  const itemsNest: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <Typography.Title
          onClick={() => setIsCourseExpand(!isCourseExpand)}
          className={`${CSS.cs_nav_bar_title_container} ${
            currentActive === "Courses" ? CSS.cs_menu_active_bg : ""
          }`}
          level={5}
        >
          <div className="cs-dis-flex">
            <div>Courses</div>
            <div className={classNames(CSS.dropdown)}>
              <FontAwesomeIcon
                icon={isCourseExpand ? faAngleUp : faAngleDown}
              />
            </div>
          </div>
        </Typography.Title>
      ),
      children: getCoursesList(),
    },
  ];

  const itemsNestCountry: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <Typography.Title
          onClick={() => setIsCountryExpanded(!isCountryExpanded)}
          className={`${CSS.cs_nav_bar_title_container} ${
            currentActive === "Courses" ? CSS.cs_menu_active_bg : ""
          }`}
          level={5}
        >
          <div className="cs-dis-flex">
            <div>Countries</div>
            <div className={classNames(CSS.dropdown)}>
              <FontAwesomeIcon
                icon={isCountryExpanded ? faAngleUp : faAngleDown}
              />
            </div>
          </div>
        </Typography.Title>
      ),
      children: getCountryList(),
    },
  ];

  const getMenuItem = () => {
    return (
      <div>
        <div className={CSS.cs_top_menu}>
          <Typography.Title
            onClick={() => handleActiveMenu("/")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "/" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            Home
          </Typography.Title>
        </div>

        <div className={CSS.cs_top_menu}>
          <Typography.Title
            onClick={() => handleActiveMenu("/about")}
            className={`${CSS.cs_nav_bar_title_container} ${
              currentActive === "/about" ? CSS.cs_menu_active_bg : ""
            }`}
            level={5}
          >
            About Us
          </Typography.Title>
        </div>

        <div className={CSS.cs_top_menu}>
          <Collapse
            ghost
            expandIcon={() => null}
            items={itemsNest}
            className={CSS.cs_mob_nav_nested_header}
          />
        </div>

        <div className={CSS.cs_top_menu}>
          <Collapse
            ghost
            expandIcon={() => null}
            items={itemsNestCountry}
            className={CSS.cs_mob_nav_nested_header}
          />
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
          onClick={(e) => {
            e.stopPropagation();
            setCurrentActive("/");
            navigate("/");
          }}
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
