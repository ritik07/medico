import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { Col } from "antd";
import classNames from "classnames";
import CSS from "./category-card.module.scss";

interface iCategoryCard {
  title: string;
  icon: FontAwesomeIconProps["icon"];
  sm?: number;
  xs?: number;
  xl?: number;
  customClass?: string;
}

const CategoryCard = ({ icon, title, customClass }: iCategoryCard) => {
  return (
    <div className={classNames(CSS.cs_category_card, customClass)}>
      <div className={classNames(CSS.cs_feature_card_icon_container)}>
        <div className={classNames("cs-center", CSS.icon_container)}>
          <FontAwesomeIcon className={classNames(CSS.icon)} icon={icon} />
        </div>
        <div className={classNames("cs-center cs-tm-20", CSS.cs_category_txt)}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
