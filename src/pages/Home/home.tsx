import React from "react";
import FeatureCardContainer from "../../components/feature-card-container/feature-card-container";
import HomeBanner from "../../components/home-banner/home-banner";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Fade direction="right" delay={10} duration={1000} triggerOnce>
        <FeatureCardContainer />
      </Fade>
    </div>
  );
};

export default Home;
