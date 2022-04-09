import { useState } from "react";
import Cart from "../Cart/Cart";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import AvatarImage from "../../assets/image-avatar.png";
import classes from "./UserNavigation.module.css";
const UserNavigation = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const showCartHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={classes["profile-navigation"]}>
      <button className={classes["cart-btn"]} onClick={showCartHandler}>
        <CartIcon className={classes["cart-icon"]} />
      </button>
      <button className={classes.avatar}>
        <img src={AvatarImage} alt="profile image" />
      </button>
      {isVisible && <Cart />}
    </div>
  );
};

export default UserNavigation;
