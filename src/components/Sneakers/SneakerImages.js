import React, { useState } from "react";

import data from "../../data";
import classes from "./SneakerImages.module.css";
import SneakerThumbnails from "./SneakerThumbnails";
import SneakerBigImage from "./SneakerBigImage";

const SneakerImages = (props) => {
  const [bigImage, setBigImage] = useState(data[0].images[0].fullSize);

  const bigImageHandler = (imageId) => {
    setBigImage(data[0].images.find((x) => x.id === imageId).fullSize);
  };

  return (
    <section className={classes["sneaker-images"]}>
      <SneakerBigImage bigImage={bigImage} />
      <SneakerThumbnails bigImageHandler={bigImageHandler} />
    </section>
  );
};

export default SneakerImages;
