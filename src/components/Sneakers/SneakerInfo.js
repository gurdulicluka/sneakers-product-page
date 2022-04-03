import React, { useState } from "react";
import classes from "./SneakerInfo.module.css";
import data from "../../data";
import SneakerDescription from "./SneakerDescription";
import SneakerPriceTag from "./SneakerPriceTag";

const sneaker = data.find((sneaker) => sneaker.id === 1);

const SneakerInfo = (props) => {
  const [product, setProduct] = useState(sneaker);

  return (
    <section className={classes["sneaker-info"]}>
      <SneakerDescription sneaker={product} />
      <SneakerPriceTag sneaker={product} />
    </section>
  );
};

export default SneakerInfo;
