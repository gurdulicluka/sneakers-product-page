import React from "react";
import classes from "./Thumbnail.module.css";

const Thumbnail = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes.thumbnail} ${
        props.isActive ? classes["selected"] : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Thumbnail;
