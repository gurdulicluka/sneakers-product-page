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
            <a href="#">
              <BrandLogo />
            </a>
          </h1>
        </div>
        <ul className={classes["main-navigation"]}>
          <li>
            <a href="Collections">Collections</a>
          </li>
          <li>
            <a href="Men">Men</a>
          </li>
          <li>
            <a href="Women">Women</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={classes["profile-navigation"]}>
        <CartIcon className={classes["cart-icon"]} />
        <div className={classes.avatar}>
          <img src={AvatarImage} alt="profile image" />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
