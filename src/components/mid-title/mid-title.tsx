import React from "react";
import classNames from "classnames";
import CSS from "./mid-title.module.scss";

interface iMidTitle {
  titile: string;
}

const MidTitle = ({ titile }: iMidTitle) => {
  return (
    <div className={classNames(CSS.cs_mid_title_container)}>
      <div className={CSS.cs_decor_line}>_____</div>

      <div className={classNames("cs-lm-15 cs-rm-15 cs-fs-18")}>{titile}</div>

      <div className={CSS.cs_decor_line}>_____</div>
    </div>
  );
};

export default MidTitle;
