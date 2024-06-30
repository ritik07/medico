import React from "react";
import classNames from "classnames";
import CSS from "./all-courses.module.scss";
import { Col, Row } from "antd";
import ExploreBtn from "../explore-btn/explore-btn";
import InfoCard from "../info-card/info-card";
import mbbs from "./assets/mbbs.jpg";
import dentist from "./assets/dentist.jpg";
import medical from "./assets/medical.jpg";
import { Slide, Zoom } from "react-awesome-reveal";

const AllCourses = () => {
  return (
    <div>
      <Slide delay={50} duration={1000} triggerOnce direction="left">
        <Row>
          <Col xl={18} xs={24} sm={24}>
            <Row>
              <Col xl={24} xs={24} sm={24}>
                <div
                  className={classNames("cs-bm-4", CSS.cs_txt_title_home_brief)}
                >
                  ALL COURSES OF{" "}
                  <span className={CSS.cs_txt_title_home_brief_highlight}>
                    Medico-Overseas Consultancy
                  </span>
                </div>
              </Col>
              <Col xl={24} xs={24} sm={24}>
                <div className={classNames("cs-tm-4", CSS.cs_home_brief_para)}>
                  Medico offers a new way to explore subjects you’re passionate
                  about in top Countries.
                </div>
              </Col>
            </Row>
          </Col>

          <Col xl={6} xs={24} sm={24} className={classNames("cs-center")}>
            <ExploreBtn text="Learn more" />
          </Col>
        </Row>
      </Slide>

      <Slide delay={50} duration={1000} triggerOnce direction="right">
        <div className="cs-tm-40">
          <Row gutter={[20, 20]}>
            <Col xl={8}>
              <InfoCard text="M.B.B.S" image={mbbs} />
            </Col>

            <Col xl={8}>
              <InfoCard text="Dentistry" image={dentist} />
            </Col>

            <Col xl={8}>
              <InfoCard text="Medical" image={medical} />
            </Col>
          </Row>
        </div>
      </Slide>
    </div>
  );
};

export default AllCourses;
