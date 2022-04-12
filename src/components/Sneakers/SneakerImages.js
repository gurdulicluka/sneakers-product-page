import React, { useState } from "react";
import classes from "./SneakerImages.module.css";
import SneakerThumbnails from "./SneakerThumbnails";
import SneakerBigImage from "./SneakerBigImage";

const SneakerImages = (props) => {
  const [bigImage, setBigImage] = useState(props.sneakers.images[0].fullSize);

  const bigImageHandler = (imageId) => {
    setBigImage(props.sneakers.images.find((x) => x.id === imageId).fullSize);
  };

  return (
    <section className={classes["sneaker-images"]}>
      <SneakerBigImage bigImage={bigImage} />
      <SneakerThumbnails
        sneakers={props.sneakers}
        bigImageHandler={bigImageHandler}
      />
    </section>
  );
};

export default SneakerImages;
