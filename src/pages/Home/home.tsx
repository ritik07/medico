import React from "react";
import FeatureCardContainer from "../../components/feature-card-container/feature-card-container";
import HomeBanner from "../../components/home-banner/home-banner";
import { Fade, Zoom } from "react-awesome-reveal";
import classNames from "classnames";
import CSS from "./home.module.scss";
import HomeBrief from "../../components/home-brief/home-brief";
import BrowseCategory from "../../components/browse-category/browse-category";
import AllCourses from "../../components/all-courses/all-courses";
import Consultation from "../../components/consultation/consultation";
import NewsLetter from "../../components/news-letter/news-letter";
import {
  faUserGraduate,
  faBookOpen,
  faUsers,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Testimonial from "../../components/testimonials/testimonials";

const Home = () => {
  const featureCards = [
    {
      color: "#626CE1",
      title: "TRENDING COURSES",
      icon: faUserGraduate,
    },
    {
      color: "#06bbcc",
      title: "RELIABILITY",
      icon: faBookOpen,
    },
    {
      color: "#1F98DF",
      title: "BEST GUIDANCE",
      icon: faUsers,
      customClass: CSS.cs_mb_tm_10,
    },
    {
      color: "#333A65",
      title: "VERIFIED INFORMATION",
      icon: faFile,
      customClass: CSS.cs_mb_tm_10,
    },
  ];

  return (
    <div className={classNames(CSS.cs_home_container)}>
      <HomeBanner />

      <Fade
        className={classNames(CSS.cs_home_component_wrapper)}
        direction="right"
        triggerOnce
      >
        <FeatureCardContainer featureCards={featureCards} />
      </Fade>

      <div className={classNames(CSS.cs_home_component_wrapper)}>
        <Zoom delay={10} duration={1000} triggerOnce>
          <HomeBrief />
        </Zoom>

        <div className="cs-bp-40">
          <BrowseCategory />
        </div>

        <div className="cs-bp-40">
          <AllCourses />
        </div>

        <div className="cs-bp-40 cs-tp-80">
          <Testimonial />
        </div>

        <div className="cs-bp-80 cs-tp-80">
          <Consultation />
        </div>
      </div>
    </div>
  );
};

export default Home;
