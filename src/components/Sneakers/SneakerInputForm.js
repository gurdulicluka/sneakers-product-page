import { useState } from "react";
import Button from "../UI/Button";
import classes from "./SneakerInputForm.module.css";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import Input from "../UI/Input";

const SneakerInputForm = (props) => {
  const [amount, setAmount] = useState(0);

  const decrementAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const incrementAmount = () => {
    setAmount(amount + 1);
  };

  const handleChange = (e) => {
    setAmount(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setAmount(0);
  };

  return (
    <form
      className={classes["input-amount-form"]}
      action=""
      onSubmit={onSubmit}
    >
      <Input
        amount={amount}
        decrease={decrementAmount}
        increase={incrementAmount}
        handleChange={handleChange}
      />
      <Button>
        <CartIcon />
        <p className={classes["btn-txt"]}>Add To Cart</p>
      </Button>
    </form>
  );
};

export default SneakerInputForm;
