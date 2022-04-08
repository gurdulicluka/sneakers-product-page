import React from "react";
import classes from "./Input.module.css";
import { ReactComponent as MinusIcon } from "../../assets/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";

const Input = React.forwardRef((props, ref) => {
  const decrementAmount = () => {
    if (ref.current.value > 1) {
      ref.current.value--;
    }
  };

  const incrementAmount = () => {
    if (ref.current.value < 10) {
      ref.current.value++;
    }
  };

  return (
    <div className={classes["input-amount"]}>
      <button
        type="button"
        onClick={decrementAmount}
        className={classes["input-btn"]}
      >
        <MinusIcon />
      </button>
      <input ref={ref} {...props.input} />
      <button
        type="button"
        onClick={incrementAmount}
        className={classes["input-btn"]}
      >
        <PlusIcon />
      </button>
    </div>
  );
});

export default Input;
