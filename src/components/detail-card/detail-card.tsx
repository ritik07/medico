import { Col, Row } from "antd";
import classNames from "classnames";
import React from "react";
import ExploreBtn from "../explore-btn/explore-btn";
import CSS from "./detail-card.module.scss";

interface IReasons {
  key: string;
  value: string;
}

interface IDetailCard {
  heading: string;
  img: string;
  title: string;
  title_desc: string;
  question: string;
  reasonList: IReasons[];
}

interface IDetailCardArray {
  medicalCourses: IDetailCard[];
}

const DetailCard = ({ medicalCourses }: IDetailCardArray) => {
  return (
    <div>
      {medicalCourses.map((item, index) => {
        return (
          <div>
            <div className={classNames("cs-center cs-tm-40", CSS.upper_card)}>
              {item.heading}
            </div>

            <div className={classNames("cs-tm-10", CSS.detail_card)}>
              <Row gutter={[20, 20]}>
                <Col xl={8}>
                  <div
                    className={classNames(
                      "cs-tp-40 cs-bp-40",
                      CSS.cs_img_container
                    )}
                  >
                    <img
                      src={item.img}
                      alt=""
                      className={classNames(CSS.cs_img)}
                    />
                  </div>
                </Col>

                <Col xl={16}>
                  <div className={classNames("cs-tm-40", CSS.cs_title)}>
                    {item.title}
                  </div>
                  <div className={classNames("cs-tm-10", CSS.cs_title_desc)}>
                    {item.title_desc}
                  </div>

                  <div className={classNames("cs-tm-12", CSS.cs_title)}>
                    {item.question}
                  </div>

                  {item.reasonList.map((reason, index) => {
                    return (
                      <div className={classNames(" cs-tm-20 cs-bm-12")}>
                        <span className={classNames("cs-rm-5", CSS.cs_title)}>
                          {reason.key}
                        </span>
                        <div className={classNames(CSS.cs_title_desc)}>
                          {reason.value}
                        </div>
                      </div>
                    );
                  })}

                  <div className={classNames("cs-tm-20")}>
                    <Row>
                      <Col xl={6}>
                        <ExploreBtn text="Explore Countries" />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailCard;
