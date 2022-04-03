import { useEffect, useState } from "react";
import classes from "./SneakerPriceTag.module.css";

const SneakerPriceTag = (props) => {
  const [price, setPrice] = useState(props.sneaker.price);
  const [isDiscounted, setIsDiscounted] = useState(false);

  const discountHandler = () => {
    if (props.sneaker.discountPercent > 0) {
      setIsDiscounted(true);
      const newPrice =
        props.sneaker.price -
        (props.sneaker.price / 100) * props.sneaker.discountPercent;
      setPrice(newPrice);
      return;
    }
    return;
  };

  useEffect(() => {
    discountHandler();
  }, []);

  const defaultPrice = (
    <p className={classes.price}>{`$${price.toFixed(2)}`}</p>
  );

  const discountPrice = (
    <>
      <p className={classes.price}>
        {`$${price.toFixed(2)}`}
        <span
          className={classes["discount-amount"]}
        >{`${props.sneaker.discountPercent}%`}</span>
      </p>
      <p className={classes["old-price"]}>{`$${props.sneaker.price.toFixed(
        2
      )}`}</p>
    </>
  );

  return (
    <div className={classes["sneaker-price"]}>
      {isDiscounted ? discountPrice : defaultPrice}
    </div>
  );
};

export default SneakerPriceTag;

//DODATI CLASS SVIMA KOJIMA FALI I DA IMAJU SMISLA
