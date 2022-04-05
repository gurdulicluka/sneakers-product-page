import { useState } from "react";
import classes from "./Input.module.css";
import { ReactComponent as MinusIcon } from "../../assets/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";

const Input = (props) => {
  return (
    <div className={classes["input-amount"]}>
      <button
        type="button"
        onClick={props.decrease}
        className={classes["input-btn"]}
      >
        <MinusIcon />
      </button>
      <input
        type="text"
        name="amount"
        value={props.amount}
        onChange={(e) => {
          props.handleChange(e);
        }}
      />
      <button
        type="button"
        onClick={props.increase}
        className={classes["input-btn"]}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Input;
