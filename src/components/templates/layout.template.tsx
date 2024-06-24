import React from "react";
import { ConfigProvider } from "antd";
import NavBarMobile from "../nav-bar/nav-bar-mobile";
// import CSS from "./layout.template.module.scss";

const LayoutTemplate = () => {
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              contentPadding: 0,
              // contentBg: "#06BBCC !important",
            },
          },
          token: {
            // colorText: "#fff !important",
            fontSize: 18,
          },
        }}
      >
        <NavBarMobile />
      </ConfigProvider>
    </div>
  );
};

export default LayoutTemplate;
