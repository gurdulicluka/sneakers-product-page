import { useState, useRef, useContext } from "react";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import classes from "./SneakerInputForm.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";

const SneakerInputForm = (props) => {
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.sneaker.id,
      name: props.sneaker.name,
      amount: amount,
      price: props.price,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    addToCartHandler(enteredAmountNumber);
    amountInputRef.current.value = 1;
  };

  return (
    <form
      className={classes["input-amount-form"]}
      action=""
      onSubmit={onSubmit}
    >
      <Input
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: 1,
        }}
      />
      <Button>
        <CartIcon />
        <p className={classes["btn-txt"]}>Add To Cart</p>
      </Button>
    </form>
  );
};

export default SneakerInputForm;
