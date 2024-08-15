import classNames from "classnames";
import React from "react";
import Slider from "react-slick";
import one from "../assets/wb-1.jpg";
import two from "../assets/wb-2.jpg";
import three from "../assets/wb-3.jpg";
import CSS from "./web-banner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";
import { Fade, Slide } from "react-awesome-reveal";

const WebBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={classNames(CSS.cs_home_banner_web_next_arrow)}
        style={{ ...style }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={classNames(CSS.cs_home_banner_web_prev_arrow)}
        style={{ ...style }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
    );
  }

  return (
    <div>
      <Slider
        className={classNames(CSS.cs_home_banner_web_container)}
        {...settings}
      >
        <div>
          <div className={classNames(CSS.cs_home_banner_container)}>
            <div className="cs-pos-rel">
              <div className={CSS.cs_cover_img_overlay} />
              <img
                className={classNames(CSS.cs_home_banner)}
                src={one}
                alt="Banner 1"
              />
              <div className={classNames(CSS.cs_banner_text)}>
                <Slide direction="left" cascade triggerOnce>
                  <h1>Explore Global Opportunities</h1>
                </Slide>

                <Slide direction="right" cascade triggerOnce>
                  <p className="cs-tm-10">
                    Discover the world with Medico-Overseas. We provide pathways
                    to prestigious universities worldwide, ensuring you achieve
                    your dream career in medicine.
                  </p>
                </Slide>

                <Row className="cs-tm-20">
                  <Col xl={4} className={classNames("cs-pointer")}>
                    <Fade delay={1000} direction="up" cascade triggerOnce>
                      <div className={classNames(CSS.btn_slider)}>
                        Explore More
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={classNames(CSS.cs_home_banner_container)}>
            <div className="cs-pos-rel">
              <div className={CSS.cs_cover_img_overlay} />
              <img
                className={classNames(CSS.cs_home_banner)}
                src={two}
                alt="Banner 2"
              />
              <div className={classNames(CSS.cs_banner_text)}>
                <Slide direction="left" cascade triggerOnce>
                  <h1>Embark on Your Medical Journey</h1>
                </Slide>
                <Slide direction="right" cascade triggerOnce>
                  <p className="cs-tm-10">
                    With Medico-Overseas, start your journey towards becoming a
                    doctor at top medical universities across the globe. Your
                    future begins here.
                  </p>
                </Slide>
                <Row className="cs-tm-20">
                  <Col xl={4} className={classNames("cs-pointer")}>
                    <Fade delay={1000} direction="up" cascade triggerOnce>
                      <div className={classNames(CSS.btn_slider)}>
                        Get Started
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={classNames(CSS.cs_home_banner_container)}>
            <div className="cs-pos-rel">
              <div className={CSS.cs_cover_img_overlay} />
              <img
                className={classNames(CSS.cs_home_banner)}
                src={three}
                alt="Banner 3"
              />
              <div className={classNames(CSS.cs_banner_text)}>
                <Slide direction="left" cascade triggerOnce>
                  <h1>Realize Your Medical Ambitions</h1>
                </Slide>
                <Slide direction="right" cascade triggerOnce>
                  <p className="cs-tm-10">
                    Medico-Overseas is your trusted partner in securing
                    admission to world-class medical institutions. Take the
                    first step toward your successful medical career.
                  </p>
                </Slide>
                <Row className="cs-tm-20">
                  <Col xl={4} className={classNames("cs-pointer")}>
                    <Fade delay={1000} direction="up" cascade triggerOnce>
                      <div className={classNames(CSS.btn_slider)}>
                        Learn More
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default WebBanner;
