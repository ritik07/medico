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

interface IFeatureCard {
  color: string;
  title: string;
  icon: any;
  customClass?: string;
}

interface IFeatureCardContainer {
  featureCards: IFeatureCard[];
}

const FeatureCardContainer = ({ featureCards }: IFeatureCardContainer) => {
  return (
    <div>
      <Row>
        {featureCards.map((card, index) => (
          <FeatureCard
            key={index}
            sm={12}
            xs={12}
            xl={6}
            color={card.color}
            title={card.title}
            icon={card.icon}
            customClass={card.customClass}
          />
        ))}
      </Row>
    </div>
  );
};

export default FeatureCardContainer;
