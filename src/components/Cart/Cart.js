import { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const cartIsEmptyText = (
    <p className={classes["cart-empty-txt"]}>Your cart is empty.</p>
  );

  const cartItems = (
    <ul className={classes["cart-all-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </ul>
  );

  return (
    <div className={classes.cart}>
      <h3 className={classes["cart-title"]}>Cart</h3>
      <div className={classes["cart-items-wrapper"]}>
        {hasItems ? cartItems : cartIsEmptyText}
        {hasItems && <Button>Checkout</Button>}
      </div>
    </div>
  );
};

export default Cart;
