import { useState, useContext } from "react";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import CartContext from "../../store/cart-context";
import AvatarImage from "../../assets/image-avatar.png";
import Cart from "../Cart/Cart";
import classes from "./UserNavigation.module.css";

const UserNavigation = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const showCartHandler = () => {
    setIsVisible(!isVisible);
  };

  const itemBadgeClass = numberOfCartItems === 0 ? "" : classes.badge;
  return (
    <div className={classes["profile-navigation"]}>
      <button
        value={numberOfCartItems}
        className={`${classes["cart-btn"]} ${itemBadgeClass}`}
        onClick={showCartHandler}
      >
        <CartIcon className={classes["cart-icon"]} />
      </button>
      <button className={classes.avatar}>
        <img src={AvatarImage} alt="avatar" />
      </button>
      {isVisible && <Cart />}
    </div>
  );
};

export default UserNavigation;
