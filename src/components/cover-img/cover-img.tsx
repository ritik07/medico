import React, { useEffect, useState } from "react";
import CSS from "./cover-img.module.scss";

interface iCoverImg {
  image: string | any;
  text: string;
}

const CoverImg = ({ image, text }: iCoverImg) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={CSS.cs_cover_img_container}>
      <div
        className={CSS.cs_cover_img}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPositionY: `${-190 + offsetY * 0.5}px`,
        }}
      />
      <div className={CSS.cs_overlay} />
      <div className={CSS.cs_text}>{text}</div>
    </div>
  );
};

export default CoverImg;
