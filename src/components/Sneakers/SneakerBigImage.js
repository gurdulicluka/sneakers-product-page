import classes from "./SneakerBigImage.module.css";

const SneakerBigImage = (props) => {
  return (
    <div className={classes["big-image"]}>
      <img src={props.bigImage} alt="" />
    </div>
  );
};

export default SneakerBigImage;
