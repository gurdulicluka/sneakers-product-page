import classes from "./SneakerDescription.module.css";

const SneakerDescription = (props) => {
  return (
    <>
      <h2 className={classes["brand-name"]}>{props.sneaker.brand}</h2>
      <h3 className={classes["sneaker-name"]}>{props.sneaker.name}</h3>
      <p className={classes["sneaker-description"]}>
        {props.sneaker.description}
      </p>
    </>
  );
};

export default SneakerDescription;
