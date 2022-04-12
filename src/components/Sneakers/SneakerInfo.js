import { useState, useEffect } from "react";
import classes from "./SneakerInfo.module.css";
import data from "../../data";
import SneakerDescription from "./SneakerDescription";
import SneakerPriceTag from "./SneakerPriceTag";
import SneakerInputForm from "./SneakerInputForm";

const SneakerInfo = (props) => {
  const { price, discountPercent } = props.sneakers;
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [priceAmount, setPriceAmount] = useState(price);

  const discountHandler = () => {
    if (discountPercent > 0) {
      setIsDiscounted(true);
      const newPrice = price - (price / 100) * discountPercent;
      setPriceAmount(newPrice);
      return;
    }
    return;
  };

  useEffect(() => {
    discountHandler();
  }, []);

  return (
    <section className={classes["sneaker-info"]}>
      <SneakerDescription sneakers={props.sneakers} />
      <SneakerPriceTag
        sneakers={props.sneakers}
        price={priceAmount}
        isDiscounted={isDiscounted}
      />
      <SneakerInputForm sneakers={props.sneakers} price={priceAmount} />
    </section>
  );
};

export default SneakerInfo;
