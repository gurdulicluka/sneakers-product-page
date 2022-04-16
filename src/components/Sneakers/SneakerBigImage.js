import { useState } from "react";
import classes from "./SneakerBigImage.module.css";
import Modal from "../UI/Modal";

const SneakerBigImage = (props) => {
  const [showZoomedIn, setShowZoomedIn] = useState(false);

  const showModalHandler = () => {
    setShowZoomedIn(!showZoomedIn);
  };
  return (
    <>
      {showZoomedIn && (
        <Modal onClick={showModalHandler} image={props.bigImage} />
      )}
      <div onClick={showModalHandler} className={classes["big-image"]}>
        <img src={props.bigImage} alt="" />
      </div>
    </>
  );
};

export default SneakerBigImage;
