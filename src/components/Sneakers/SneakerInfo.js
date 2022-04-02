import React, { useState } from "react";
import classes from "./SneakerInfo.module.css";
import data from "../../data";
import SneakerDescription from "./SneakerDescription";

const sneaker = data.find((sneaker) => sneaker.id === 1);

const SneakerInfo = (props) => {
  const [product, setProduct] = useState(sneaker);

  return (
    <section className={classes["sneaker-info"]}>
      <SneakerDescription sneaker={product} />
      <p>SneakerPriceTag</p>
      <p>Input (AddToCart)</p>
    </section>
  );
};

export default SneakerInfo;
