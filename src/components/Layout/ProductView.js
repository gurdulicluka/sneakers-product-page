import React from "react";
import SneakerImages from "../Sneakers/SneakerImages";
import SneakerInfo from "../Sneakers/SneakerInfo";
import classes from "./ProductView.module.css";

const ProductView = (props) => {
  return (
    <main className={classes["product-view"]}>
      <SneakerImages />
      <SneakerInfo />
    </main>
  );
};

export default ProductView;
