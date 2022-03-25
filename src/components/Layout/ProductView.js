import React from "react";
import SneakerImages from "../Sneakers/SneakerImages";
import classes from "./ProductView.module.css";

const ProductView = (props) => {
  return (
    <main className={classes["product-view"]}>
      <SneakerImages />
    </main>
  );
};

export default ProductView;
