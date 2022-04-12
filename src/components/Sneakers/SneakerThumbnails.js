import { useState } from "react";
import classes from "./SneakerThumbnails.module.css";
import Thumbnail from "../UI/Thumbnail";

const SneakerThumbnails = (props) => {
  const [isSelected, setIsSelected] = useState("img1");

  const highlightHandler = (id) => {
    setIsSelected(id);
  };

  const sneakerThumbnailImages = props.sneakers.images.map((item) => {
    const highlight = isSelected === item.id;

    return (
      <Thumbnail
        onClick={() => highlightHandler(item.id)}
        key={item.id}
        isActive={highlight}
      >
        <img
          onClick={() => props.bigImageHandler(item.id)}
          src={item.thumbnail}
          alt="thumbnail"
        />
      </Thumbnail>
    );
  });

  return (
    <div className={classes["sneaker-thumbnails"]}>
      {sneakerThumbnailImages}
    </div>
  );
};

export default SneakerThumbnails;
