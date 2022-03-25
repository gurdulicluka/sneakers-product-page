import React from "react";
import classes from "./Thumbnail.module.css";

const Thumbnail = (props) => {
  console.log(props.isActive);
  return (
    <div
      onClick={props.onClick}
      className={`${classes.thumbnail} ${classes[props.isActive]}`}
    >
      {props.children}
    </div>
  );
};

export default Thumbnail;
