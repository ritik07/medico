import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import CSS from "./feature-card.module.scss";
import { Col } from "antd";

interface FeatureCardProps {
  color: string;
  title: string;
  icon: FontAwesomeIconProps["icon"];
  sm: number;
  xs: number;
  xl: number;
  customClass?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  color,
  title,
  icon,
  xl,
  sm,
  xs,
  customClass,
}) => {
  return (
    <Col
      sm={sm}
      xs={xs}
      xl={xl}
      style={{ backgroundColor: color }}
      className={classNames(CSS.cs_feature_card, customClass)}
    >
      <div className={classNames(CSS.cs_feature_card_icon_container)}>
        <div className={classNames("cs-center")}>
          <FontAwesomeIcon
            className={classNames("cs-font-white cs-fs-70")}
            icon={icon}
          />
        </div>
        <div
          className={classNames(
            "cs-font-white cs-center cs-tm-20",
            CSS.cs_feature_card_txt
          )}
        >
          {title}
        </div>
      </div>
    </Col>
  );
};

export default FeatureCard;
