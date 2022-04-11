import { useContext } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import data from "../../data.js";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { id, name, amount, price } = props;
  const sneakerImage = data.find((sneaker) => sneaker.id === id).images[0]
    .thumbnail;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["cart-item-image"]}>
        <img src={sneakerImage} alt="sneakers" />
      </div>
      <div className={classes["cart-item-description"]}>
        <h4 className={classes["cart-item-name"]}>{name}</h4>
        <p className={classes["cart-item-price"]}>
          {`$${price.toFixed(2)} x ${amount}`}
          <span className={classes["cart-item-total-price"]}>
            {`$${(price * amount).toFixed(2)}`}
          </span>
        </p>
      </div>
      <button
        onClick={() => cartCtx.removeItem(id)}
        className={classes["cart-remove-item-btn"]}
      >
        <DeleteIcon className={classes["delete-icon"]} />
      </button>
    </li>
  );
};

export default CartItem;
