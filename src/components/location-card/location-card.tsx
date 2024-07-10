import { Col, Row } from "antd";
import classNames from "classnames";
import React from "react";
import CSS from "./location-card.module.scss";

interface ILocationCard {
  image: string;
  title: string;
}

interface ILocationCardArray {
  countriesList: ILocationCard[];
}

const LocationCard = ({ countriesList }: ILocationCardArray) => {
  return (
    <div className={classNames("cs-pointer")}>
      <Row gutter={[20, 20]}>
        {countriesList.map((item, index) => {
          return (
            <Col xl={6} key={index}>
              <div className={classNames(CSS.cs_card_container)}>
                <div>
                  <img src={item.image} alt="" />
                  <div className={classNames(CSS.overlay)}></div>
                </div>
                <div className={classNames(CSS.title)}>{item.title}</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default LocationCard;
