import UserNavigation from "./UserNavigation";
import classes from "./NavigationBar.module.css";
import BrandLogo from "../UI/BrandLogo";

const NavigationBar = (props) => {
  return (
    <div className={classes["navigation-wrapper"]}>
      <nav>
        <BrandLogo />
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
