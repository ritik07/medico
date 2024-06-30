import classNames from "classnames";
import React from "react";
import CSS from "./stats-info.module.scss";
import CountUp from "react-countup";

interface iStatsInfo {
  number: number;
  title: string;
  delay: number;
}

const StatsInfo = ({ number, title, delay }: iStatsInfo) => {
  return (
    <div className={classNames(CSS.stats_info_container)}>
      <div className="cs-center">
        <CountUp
          suffix="+"
          className={classNames("counter", CSS.stats_info_number)}
          duration={delay}
          end={number}
        />
      </div>

      <div className="cs-center">
        <div className={classNames("cs-tm-6", CSS.stats_info_title)}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default StatsInfo;
