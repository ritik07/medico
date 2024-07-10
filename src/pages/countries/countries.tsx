import classNames from "classnames";
import React from "react";
import CoverImg from "../../components/cover-img/cover-img";
import LocationCard from "../../components/location-card/location-card";
import countries from "./assets/countries.jpg";
import russia from "./assets/Russia-img.jpg";
import kyrgyzstan from "./assets/kyrgyzstan-img.jpg";
import kazakhstan from "./assets/kazakhstan-img.jpg";
import CSS from "./countries.module.scss";

const Countries = () => {
  const LocationCardArray = [
    {
      image: russia,
      title: "Russia",
    },
    {
      image: kyrgyzstan,
      title: "Kyrgyzstan",
    },
    {
      image: kazakhstan,
      title: "Kazakhstan",
    },
  ];
  return (
    <div>
      <CoverImg image={countries} text="Countries" />

      <div className={classNames(CSS.cs_home_component_wrapper)}>
        <LocationCard countriesList={LocationCardArray} />
      </div>
    </div>
  );
};

export default Countries;
