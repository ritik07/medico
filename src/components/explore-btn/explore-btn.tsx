import classNames from "classnames";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "./explore-btn.module.scss";

interface iExploreBtn {
  text: string;
  handleClick?: () => void;
}

const ExploreBtn = ({ text, handleClick = () => {} }: iExploreBtn) => {
  return (
    <div>
      <div
        onClick={handleClick}
        className={classNames("cs-pointer cs-tm-20", CSS.cs_explore_btn)}
      >
        {text}
        <FontAwesomeIcon
          className={classNames("cs-lm-10")}
          icon={faArrowRight}
        />
      </div>
    </div>
  );
};

export default ExploreBtn;
