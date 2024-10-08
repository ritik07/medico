import React from "react";
import classNames from "classnames";
import CSS from "./info-card.module.scss";
import { useNavigate } from "react-router-dom";

interface iInfoCard {
  text: string;
  image: string;
}

const InfoCard = ({ text, image }: iInfoCard) => {
  const navigate = useNavigate();

  const handleNavigate = (value: string) => {
    navigate(value);
  };
  return (
    <div onClick={() => handleNavigate("/courses/medical")} className={classNames(CSS.cs_info_card_container)}>
      <div className={classNames("cs-center", CSS.info_card_container)}>
        <img className={classNames(CSS.cs_card_img_container)} src={image} alt="card-view" />
      </div>

      <div className={classNames("cs-center cs-tm-30 cs-pointer", CSS.cs_info_card_text)}>{text}</div>
    </div>
  );
};

export default InfoCard;
