import React from "react";
import classNames from "classnames";
import CSS from "./offer-card.module.scss";
import { Col, Row } from "antd";
import ExploreBtn from "../explore-btn/explore-btn";

interface IOfferCard {
  heading: string;
  description: string;
  btn_txt: string;
  clickAction: () => void;
}

const OfferCard = ({
  description,
  heading,
  btn_txt,
  clickAction,
}: IOfferCard) => {
  return (
    <div>
      <div className={classNames(CSS.cs_offer_card_container)}>
        <Row gutter={[20, 20]}>
          <Col xl={18}>
            <div className={classNames("cs-bm-30", CSS.cs_heading)}>
              {heading}
            </div>
            <div className={classNames(CSS.cs_desc)}>{description}</div>
          </Col>

          <Col xl={6} className={classNames("cs-flex-end")}>
            <div className={classNames("cs-flex-end")}>
              <ExploreBtn text={btn_txt} handleClick={clickAction} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OfferCard;
