import classes from "./SneakerPriceTag.module.css";

const SneakerPriceTag = (props) => {
  const defaultPrice = (
    <p className={classes.price}>{`$${props.price.toFixed(2)}`}</p>
  );

  const discountPrice = (
    <>
      <p className={classes.price}>
        {`$${props.price.toFixed(2)}`}
        <span
          className={classes["discount-amount"]}
        >{`${props.sneakers.discountPercent}%`}</span>
      </p>
      <p className={classes["old-price"]}>{`$${props.sneakers.price.toFixed(
        2
      )}`}</p>
    </>
  );

  return (
    <div className={classes["sneaker-price"]}>
      {props.isDiscounted ? discountPrice : defaultPrice}
    </div>
  );
};

export default SneakerPriceTag;
