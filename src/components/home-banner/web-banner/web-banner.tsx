import classNames from "classnames";
import React from "react";
import Slider from "react-slick";
import one from "../assets/wb-1.jpg";
import two from "../assets/wb-2.jpg";
import three from "../assets/wb-3.jpg";
import CSS from "./web-banner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

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
                alt="Banner 1"
              />
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
                alt="Banner 1"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default WebBanner;
