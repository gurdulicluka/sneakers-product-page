import { ReactComponent as BrandLogo } from "../../assets/logo.svg";
import UserNavigation from "./UserNavigation";
import classes from "./NavigationBar.module.css";

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
      <UserNavigation />
    </div>
  );
};

export default NavigationBar;
