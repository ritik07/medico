import React from "react";
import { Row, Col, Dropdown, MenuProps } from "antd";
import classNames from "classnames";
import CSS from "./nav-bar-desktop.module.scss";
import logoImg from "../../../static/images/logo/MOC_L2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const COUNTRY_LIST: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className={classNames(
            "cs-dis-flex cs-hrz-center",
            CSS.cs_navbar_menu_title
          )}
        >
          Georgia
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className={classNames(
            "cs-dis-flex cs-hrz-center",
            CSS.cs_navbar_menu_title
          )}
        >
          Russia
        </div>
      ),
    },
    {
      key: "1",
      label: (
        <div
          className={classNames(
            "cs-dis-flex cs-hrz-center",
            CSS.cs_navbar_menu_title
          )}
        >
          Bangladesh
        </div>
      ),
    },
  ];

  const COURSES_LIST: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className={classNames(
            "cs-dis-flex cs-hrz-center",
            CSS.cs_navbar_menu_title
          )}
        >
          Medical
        </div>
      ),
    },
  ];
  return (
    <div>
      <Row
        className={classNames("cs-tp-10 cs-bp-10", CSS.cs_nav_bar_container)}
      >
        <Col xl={4} lg={3} md={2}></Col>
        <Col xl={3} lg={3} md={3}>
          <div className={classNames(CSS.cs_navbar_logo_container)}>
            <img src={logoImg} className={classNames(CSS.cs_navbar_logo)} />
          </div>
        </Col>

        <Col xl={4} lg={6} md={3}></Col>

        <Col xl={13} lg={6} md={3}>
          <Row>
            <Col lg={24} xl={24}>
              <div className={classNames("cs-dis-flex")}>
                <div className={classNames("cs-rm-13", CSS.cs_nav_title)}>
                  <span className={classNames("cs-pointer")}>Home</span>
                </div>

                <div
                  className={classNames("cs-rm-13 cs-lm-13", CSS.cs_nav_title)}
                >
                  <span className={classNames("cs-pointer")}>About</span>
                </div>

                <div className={classNames(CSS.cs_nav_title)}>
                  <div className={classNames("cs-rm-13 cs-lm-13")}>
                    <span className={classNames("cs-pointer")}>
                      <Dropdown
                        rootClassName={CSS.cs_navbar_root}
                        overlayClassName={CSS.cs_navbar_menu_container}
                        menu={{ items: COURSES_LIST }}
                      >
                        <div className={classNames("cs-dis-flex")}>
                          Courses
                          <div className={classNames(CSS.dropdown)}>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </div>
                        </div>
                      </Dropdown>
                    </span>
                  </div>
                </div>

                <div
                  className={classNames("cs-rm-13 cs-lm-13", CSS.cs_nav_title)}
                >
                  <div className={classNames("cs-rm-13")}>
                    <span className={classNames("cs-pointer")}>
                      <Dropdown
                        rootClassName={CSS.cs_navbar_root}
                        overlayClassName={CSS.cs_navbar_menu_container}
                        menu={{ items: COUNTRY_LIST }}
                      >
                        <div className={classNames("cs-dis-flex")}>
                          Countries
                          <div className={classNames(CSS.dropdown)}>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </div>
                        </div>
                      </Dropdown>
                    </span>
                  </div>
                </div>

                <div className={classNames(CSS.cs_nav_title)}>
                  <span className={classNames("cs-pointer")}>Contact</span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
