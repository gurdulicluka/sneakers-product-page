import React, { useState } from "react";
import SneakerImages from "../Sneakers/SneakerImages";
import SneakerInfo from "../Sneakers/SneakerInfo";
import classes from "./ProductView.module.css";
import data from "../../data";

const ProductView = (props) => {
  const [product, setProduct] = useState(
    data.find((sneaker) => sneaker.id === 1)
  );
  // No product selection so thats why specific state
  return (
    <main className={classes["product-view"]}>
      <SneakerImages sneakers={product} />
      <SneakerInfo sneakers={product} />
    </main>
  );
};

export default ProductView;
