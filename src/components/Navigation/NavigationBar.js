import classes from "./NavigationBar.module.css";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import { ReactComponent as BrandLogo } from "../../assets/logo.svg";
import AvatarImage from "../../assets/image-avatar.png";

const NavigationBar = (props) => {
  return (
    <div className={classes["navigation-wrapper"]}>
      <nav>
        <div className={classes["brand-logo"]}>
          <h1>
            <a href="Home">
              <BrandLogo />
            </a>
          </h1>
        </div>
        <ul className={classes["main-navigation"]}>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={classes["profile-navigation"]}>
        <CartIcon className={classes["cart-icon"]} />
        <div className={classes.avatar}>
          <img src={AvatarImage} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
