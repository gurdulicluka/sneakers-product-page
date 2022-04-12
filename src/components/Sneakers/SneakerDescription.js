import classes from "./SneakerDescription.module.css";

const SneakerDescription = (props) => {
  return (
    <>
      <h2 className={classes["brand-name"]}>{props.sneakers.brand}</h2>
      <h3 className={classes["sneaker-name"]}>{props.sneakers.name}</h3>
      <p className={classes["sneaker-description"]}>
        {props.sneakers.description}
      </p>
    </>
  );
};

export default SneakerDescription;
