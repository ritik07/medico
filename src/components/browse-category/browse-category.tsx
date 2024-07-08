import React from "react";
import classNames from "classnames";
import CategoryCard from "../category-card/category-card";
import MidTitle from "../mid-title/mid-title";
import CSS from "./browse-category.module.scss";
import { faKitMedical } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

const BrowseCategory = () => {
  return (
    <div>
      <Slide direction="right" delay={10} duration={1000} triggerOnce>
        <div className={classNames("cs-center cs-tp-40 cs-bp-10")}>
          <MidTitle titile="Browse Categories" />
        </div>

        <div className="cs-center">
          <div className={CSS.cs_txt_title_home_brief}>
            Browse your future opportunities with {" "}
            <span className={CSS.cs_txt_title_home_brief_highlight}>MOC</span>
          </div>
        </div>
      </Slide>

      <Slide direction="left" delay={10} duration={1000} triggerOnce>
        <div className="cs-tm-40">
          <Row className="cs-center">
            <Col className={classNames("cs-center cs-pointer")} xl={3}>
              <CategoryCard title={"Medical"} icon={faKitMedical} />
            </Col>
          </Row>
        </div>
      </Slide>
    </div>
  );
};

export default BrowseCategory;
