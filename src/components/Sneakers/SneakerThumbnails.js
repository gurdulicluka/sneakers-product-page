import { useState } from "react";
import classes from "./SneakerThumbnails.module.css";
import Thumbnail from "../UI/Thumbnail";
import data from "../../data.js";

const SneakerThumbnails = (props) => {
  const [isSelected, setIsSelected] = useState("img1");

  const highlightHandler = (id) => {
    setIsSelected(id);
  };

  const sneakerThumbnailImages = data[0].images.map((item) => {
    const highlight = isSelected === item.id ? "selected" : "";

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
