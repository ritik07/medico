import { Col, Row } from "antd";
import classNames from "classnames";
import React from "react";
import ExploreBtn from "../explore-btn/explore-btn";
import CSS from "./consultation.module.scss";
import consult from "./assets/conslt.jpg";

const Consultation = () => {
  return (
    <div>
      <Row>
        <Col xl={12} className={classNames("cs-center")}>
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
              Unlock your full potential with our free consultation service. Our
              experienced advisors will provide personalized guidance, equipping
              you with the tools and strategies to maximize your chances of
              success in your study abroad journey.
            </div>

            <Row>
              <Col xl={6}>
                <ExploreBtn text="Contact us" />
              </Col>
            </Row>
          </div>
        </Col>

        <Col xl={12}>
          <div className={CSS.info_card_container}>
            <img
              className={CSS.cs_card_img_container}
              src={consult}
              alt="img"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Consultation;
