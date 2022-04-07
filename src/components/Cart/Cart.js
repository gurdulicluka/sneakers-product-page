import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <h3 className={classes["cart-title"]}>Cart</h3>
      <div className={classes["cart-items"]}>
        <p className={classes["cart-empty-txt"]}>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default Cart;
