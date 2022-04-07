import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import AvatarImage from "../../assets/image-avatar.png";
import classes from "./UserNavigation.module.css";
const UserNavigation = (props) => {
  return (
    <div className={classes["profile-navigation"]}>
      <button className={classes["cart-btn"]} onClick={props.onClick}>
        <CartIcon className={classes["cart-icon"]} />
      </button>
      <button className={classes.avatar}>
        <img src={AvatarImage} alt="avatar" />
      </button>
    </div>
  );
};

export default UserNavigation;
