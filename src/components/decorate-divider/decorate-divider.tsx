import classNames from "classnames";
import React from "react";
import download from "./assets/download.svg";
import CSS from "./decorate-divider.module.scss";

const DecorateDivider = () => {
  return (
    <div className={classNames(CSS.decorate_divider_container)}>
      <img
        className={classNames(CSS.decorate_divider_container_img)}
        src={download}
      />
    </div>
  );
};

export default DecorateDivider;
