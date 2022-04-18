import BrandLogo from "../../UI/BrandLogo";
import { useState } from "react";
import classes from "./MobileMenu.module.css";
import { ReactComponent as MenuButtonIcon } from "../../../assets/icon-menu.svg";
import MobileMenuSlider from "./MobileMenuSlider";

const MobileMenu = () => {
  const [showMenuSlider, setShowMenuSlider] = useState(false);

  const showSliderHandler = () => {
    setShowMenuSlider(!showMenuSlider);
  };

  return (
    <div className={classes["mobile-header-menu"]}>
      {showMenuSlider && <MobileMenuSlider onClick={showSliderHandler} />}
      <button onClick={showSliderHandler} className={classes["menu-button"]}>
        <MenuButtonIcon className={classes["menu-button-icon"]} />
      </button>
      <BrandLogo />
    </div>
  );
};

export default MobileMenu;
