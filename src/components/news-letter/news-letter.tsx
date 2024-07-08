import React from "react";
import { Col, Row } from "antd";
import classNames from "classnames";
import CSS from "./news-letter.module.scss";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";

const NewsLetter = () => {
  return (
    <div>
      <Fade cascade triggerOnce direction="up">
        <div className={classNames("cs-center", CSS.cs_txt_title_home_brief)}>
          <div>
            SIGN UP TO OUR {""}
            <span className={CSS.cs_txt_title_home_brief_highlight}>
              NEWSLETTER
            </span>
          </div>
        </div>

        <div className={classNames("cs-center")}>
          <div className={classNames("cs-tm-10", CSS.cs_home_brief_para)}>
            Subscribe to our newsletter and get <br /> Study abroad
            opportunities directly in your mail
          </div>
        </div>

        <div className={classNames("cs-tp-40")}>
          <Row className="cs-center">
            <Col xl={8}>
              <input
                className={classNames(CSS.cs_news_letter)}
                placeholder="Your Email"
              />
            </Col>

            <Col xl={4}>
              <div className={classNames(CSS.cs_news_letter_btn)}>
                <div className="cs-center">
                  <span>
                    <FontAwesomeIcon
                      className={classNames("cs-font-white cs-fs-18 cs-rm-6")}
                      icon={faMailBulk}
                    />
                  </span>
                  Subscribe
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Fade>
    </div>
  );
};

export default NewsLetter;
