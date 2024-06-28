import classNames from "classnames";
import React from "react";
import CSS from "./decorate-line.module.scss";

const DecorateLine = () => {
  return (
    <div className={classNames("cs-dis-flex cs-pos-rel")}>
      <div className={classNames(CSS.cs_decorative_dot)}>. . .</div>
      <div className={classNames(CSS.cs_decorative_dot_line)}>_____</div>
    </div>
  );
};

export default DecorateLine;
