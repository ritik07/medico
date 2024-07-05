import { Col, Row } from "antd";
import classNames from "classnames";
import React from "react";
import ExploreBtn from "../explore-btn/explore-btn";
import CSS from "./consultation.module.scss";
import consult from "./assets/conslt.jpg";
import { Slide, Zoom } from "react-awesome-reveal";

const Consultation = () => {
  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col xl={12} className={classNames("cs-center")}>
          <Slide delay={50} duration={1000} triggerOnce direction="left">
            <div>
              <div className="cs-center">
                <div className={CSS.cs_txt_title_home_brief}>
                  JOIN OUR FREE CONSULTATION AND{" "}
                  <span className={CSS.cs_txt_title_home_brief_highlight}>
                    UPGRADE YOUR CHANCES
                  </span>
                </div>
              </div>

              <div className={classNames("cs-tm-10", CSS.cs_home_brief_para)}>
                Unlock your full potential with our free consultation service.
                Our experienced advisors will provide personalized guidance,
                equipping you with the tools and strategies to maximize your
                chances of success in your study abroad journey.
              </div>

              <Row>
                <Col xl={6}>
                  <ExploreBtn text="Contact us" />
                </Col>
              </Row>
            </div>
          </Slide>
        </Col>

        <Col xl={12}>
          <Slide delay={50} duration={1000} triggerOnce direction="right">
            <div className={CSS.info_card_container}>
              <img
                className={CSS.cs_card_img_container}
                src={consult}
                alt="img"
              />
            </div>
          </Slide>
        </Col>
      </Row>
    </div>
  );
};

export default Consultation;
