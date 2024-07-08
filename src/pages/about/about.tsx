import { Col, Row } from "antd";
import React from "react";
import CoverImg from "../../components/cover-img/cover-img";
import coverImg from "./assets/a.jpg";
import img1 from "./assets/7.jpg";
import img2 from "./assets/6.jpg";
import sideImg from "./assets/4.jpg";
import CSS from "./about.module.scss";
import classNames from "classnames";
import DecorateLine from "../../components/decorate-line/decorate-line";
import ExploreBtn from "../../components/explore-btn/explore-btn";
import StatsInfo from "../../components/stats-info/stats-info";
import MidTitle from "../../components/mid-title/mid-title";
import { Fade, Slide } from "react-awesome-reveal";
import SplitImageText from "../../components/split-image-text/split-image-text";
import FeatureCardContainer from "../../components/feature-card-container/feature-card-container";
import {
  faGaugeSimpleMed,
  faInfo,
  faUsers,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const featureCards = [
    {
      color: "#626CE1",
      title: "Expert Guidance",
      icon: faGaugeSimpleMed,
    },
    {
      color: "#06bbcc",
      title: "Verified Information",
      icon: faInfo,
    },
    {
      color: "#1F98DF",
      title: "8000+ Admissions",
      icon: faUsers,
      customClass: CSS.cs_mb_tm_10,
    },
    {
      color: "#333A65",
      title: "Transparency We Have 20+",
      icon: faFile,
      customClass: CSS.cs_mb_tm_10,
    },
  ];
  return (
    <div>
      <Fade direction="right" cascade triggerOnce>
        <CoverImg image={coverImg} text="About Us" />
      </Fade>
      <div className={classNames(CSS.cs_home_component_wrapper)}>
        <Fade direction="up" cascade triggerOnce>
          <Row gutter={[16, 16]}>
            <Col xs={24} xl={10} className={CSS.cs_col}>
              <div className={classNames(CSS.cs_img_container)}>
                <img
                  className={classNames(CSS.cs_img)}
                  src={sideImg}
                  alt="Promo"
                />
              </div>
            </Col>

            <Col xs={0} xl={1}></Col>
            <Col xs={24} xl={13} className={CSS.cs_col}>
              <div
                className={classNames(
                  "cs-tp-10 cs-bp-10",
                  CSS.cs_txt_sub_title_home_brief
                )}
              >
                ABOUT Medico Overseas Consultancy
              </div>

              <div
                className={classNames("cs-bm-12", CSS.cs_txt_title_home_brief)}
              >
                LEARN SOMETHING NEW, AND GROW YOUR{" "}
                <span className={CSS.cs_txt_title_home_brief_highlight}>
                  SKILLS
                </span>
              </div>

              <DecorateLine />

              <div className={classNames("cs-tm-20", CSS.cs_home_brief_para)}>
                Discover the essence of excellence with Medico Overseas. As a
                leading provider of international education solutions, we are
                dedicated to empowering students to pursue their academic
                ambitions abroad. With a proven track record of success, Medico
                Overseas offers comprehensive support and guidance to students
                seeking to unlock global opportunities for learning and growth.
                From personalized consultation to tailored solutions, we are
                committed to helping you embark on a transformative educational
                journey. Learn more about us and join the Medico Overseas family
                today.
              </div>
              <Row>
                <Col xl={8}>
                  <ExploreBtn text="Free Consultation" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Fade>

        <div className={classNames("cs-tp-80 cs-bp-40")}>
          <SplitImageText
            image1={img1}
            image2={img2}
            title="Fall 2024 applications are now open"
            description={`"Ready to take the next step towards your academic goals? Book your free consultation with Medico Overseas today! Our experienced advisors are here to guide you through every step of your journey, from selecting the perfect program to navigating the application process. Don't miss out on this invaluable opportunity – schedule your consultation now and let us help you reach your dreams!`}
          />
          <FeatureCardContainer featureCards={featureCards} />
        </div>

        <Slide direction="right" cascade triggerOnce>
          <div className={classNames("cs-center cs-tp-40 cs-bp-10")}>
            <MidTitle titile=" You don't have to struggle alone, you've got our assistance and help." />
          </div>
        </Slide>

        <Slide direction="left" cascade triggerOnce>
          <div
            className={classNames(
              "cs-bm-12 cs-center",
              CSS.cs_txt_title_home_brief
            )}
          >
            <div>
              We are{" "}
              <span className={CSS.cs_txt_title_home_brief_highlight}>
                PROUD
              </span>
            </div>
          </div>
        </Slide>

        <Row className={classNames("cs-tm-40 cs-bm-40")} gutter={[20, 20]}>
          <Col sm={12} xs={12} xl={6}>
            <StatsInfo delay={3} number={3} title={"Country"} />
          </Col>

          <Col sm={12} xs={12} xl={6}>
            <StatsInfo delay={30} number={30} title={"Universities"} />
          </Col>

          <Col sm={24} xs={24} xl={6}>
            <StatsInfo delay={7} number={12000} title={"Students Counselled"} />
          </Col>

          <Col sm={24} xs={24} xl={6}>
            <StatsInfo delay={7} number={10000} title={"Students Enrolled"} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
