import BrandLogo from "../../../components/UI/BrandLogo";
import classes from "./DesktopMenu.module.css";

const DesktopMenu = () => {
  return (
    <>
      <BrandLogo />
      <ul className={classes["desktop-navigation"]}>
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
    </>
  );
};

export default DesktopMenu;
