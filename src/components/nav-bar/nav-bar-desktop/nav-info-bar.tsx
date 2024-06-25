import React from "react";
import { Row, Col } from "antd";
import classNames from "classnames";
import CSS from "./nav-bar-desktop.module.scss";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

interface InfoItemProps {
  Icon: React.ComponentType<any>;
  text: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ Icon, text }) => (
  <div className="cs-dis-flex">
    <Icon className="cs-font-white cs-fs-16" />
    <div className="cs-lm-8 cs-font-white cs-txt-word-break">{text}</div>
  </div>
);

const NavInfoBar: React.FC = () => {
  return (
    <div>
      <Row
        className={classNames("cs-p-12", CSS.cs_nav_info_bar_container)}
        gutter={[20, 20]}
      >
        <Col xl={4} lg={3} md={2}></Col>

        <Col xl={12} lg={14} md={20}>
          <Row gutter={[10, 10]}>
            <Col xl={6} lg={7} md={8}>
              <InfoItem Icon={PhoneOutlined} text="+995-557337825" />
            </Col>

            <Col xl={8} lg={10} md={16}>
              <InfoItem Icon={MailOutlined} text="medicooversease@gmail.com" />
            </Col>

            <Col xl={9} lg={14} md={24}>
              <InfoItem
                Icon={EnvironmentOutlined}
                text="26 May 62 Batumi Georgia"
              />
            </Col>
          </Row>
        </Col>

        <Col xl={3} lg={4} md={2}></Col>

        <Col xl={1} lg={3} md={2}>
          <Row gutter={[10, 10]}>
            <Col xl={12} lg={12} md={12}>
              <InstagramOutlined className="cs-font-white cs-fs-16" />
            </Col>
            <Col xl={12} lg={12} md={12}>
              <FacebookOutlined className="cs-font-white cs-fs-16" />
            </Col>
          </Row>
        </Col>

        <Col xl={4} lg={3} md={2}></Col>
      </Row>
    </div>
  );
};

export default NavInfoBar;
