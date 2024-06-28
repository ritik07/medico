import React from "react";
import FeatureCardContainer from "../../components/feature-card-container/feature-card-container";
import HomeBanner from "../../components/home-banner/home-banner";
import { Fade, Zoom } from "react-awesome-reveal";
import classNames from "classnames";
import CSS from "./home.module.scss";
import HomeBrief from "../../components/home-brief/home-brief";

const Home = () => {
  return (
    <div className={classNames(CSS.cs_home_container)}>
      <HomeBanner />

      <Fade
        className={classNames(CSS.cs_home_component_wrapper)}
        direction="right"
        delay={10}
        duration={1000}
        triggerOnce
      >
        <FeatureCardContainer />
      </Fade>

      <div className={classNames(CSS.cs_home_component_wrapper)}>
        <Zoom delay={10} duration={1000}>
          <HomeBrief />
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
