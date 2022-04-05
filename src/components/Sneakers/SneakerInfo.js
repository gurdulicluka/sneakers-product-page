import React, { useState } from "react";
import classes from "./SneakerInfo.module.css";
import data from "../../data";
import SneakerDescription from "./SneakerDescription";
import SneakerPriceTag from "./SneakerPriceTag";
import SneakerInputForm from "./SneakerInputForm";

const sneaker = data.find((sneaker) => sneaker.id === 1);

const SneakerInfo = (props) => {
  const [product, setProduct] = useState(sneaker);

  return (
    <section className={classes["sneaker-info"]}>
      <SneakerDescription sneaker={product} />
      <SneakerPriceTag sneaker={product} />
      <SneakerInputForm />
    </section>
  );
};

export default SneakerInfo;
