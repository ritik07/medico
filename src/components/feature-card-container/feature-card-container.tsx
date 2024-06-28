import React from "react";
import { Row } from "antd";
import {
  faUserGraduate,
  faBookOpen,
  faUsers,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./feature-card/feature-card";
import classNames from "classnames";
import CSS from "./feature-card-container.module.scss";
 
const FeatureCardContainer = () => {
  return (
    <div>
      <Row>
        <FeatureCard
          sm={12}
          xs={12}
          xl={6}
          color="#626CE1"
          title="TRENDING COURSES"
          icon={faUserGraduate}
        />

        <FeatureCard
          sm={12}
          xs={12}
          xl={6}
          color="#06bbcc"
          title="RELIABILITY"
          icon={faBookOpen}
        />

        <FeatureCard
          customClass={CSS.cs_mb_tm_10}
          sm={12}
          xs={12}
          xl={6}
          color="#1F98DF"
          title="BEST GUIDANCE"
          icon={faUsers}
        />
        <div className="cs-tm-5" />

        <FeatureCard
          customClass={CSS.cs_mb_tm_10}
          sm={12}
          xs={12}
          xl={6}
          color="#333A65"
          title="VERIFIED INFORMATION"
          icon={faFile}
        />
      </Row>
    </div>
  );
};

export default FeatureCardContainer;
