import { useState, useEffect } from "react";
import classes from "./SneakerInfo.module.css";
import data from "../../data";
import SneakerDescription from "./SneakerDescription";
import SneakerPriceTag from "./SneakerPriceTag";
import SneakerInputForm from "./SneakerInputForm";

const sneaker = data.find((sneaker) => sneaker.id === 1);

const SneakerInfo = (props) => {
  const [product, setProduct] = useState(sneaker);

  const [price, setPrice] = useState(product.price);
  const [isDiscounted, setIsDiscounted] = useState(false);

  const discountHandler = () => {
    if (product.discountPercent > 0) {
      setIsDiscounted(true);
      const newPrice =
        product.price - (product.price / 100) * product.discountPercent;
      setPrice(newPrice);
      return;
    }
    return;
  };

  useEffect(() => {
    discountHandler();
  }, []);

  return (
    <section className={classes["sneaker-info"]}>
      <SneakerDescription sneaker={product} />
      <SneakerPriceTag
        sneaker={product}
        price={price}
        isDiscounted={isDiscounted}
      />
      <SneakerInputForm sneaker={product} price={price} />
    </section>
  );
};

export default SneakerInfo;
