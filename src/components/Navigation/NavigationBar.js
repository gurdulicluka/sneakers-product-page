import { useMediaQuery } from "react-responsive";
import UserNavigation from "./UserNavigation";
import DesktopMenu from "./Desktop/DesktopMenu";
import MobileMenu from "./MobileDevice/MobileMenu";
import classes from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={classes["navigation-wrapper"]}>
      <nav>{isTabletOrMobile ? <MobileMenu /> : <DesktopMenu />}</nav>
      <UserNavigation />
    </div>
  );
};

export default NavigationBar;
