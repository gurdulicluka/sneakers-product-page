import { useMediaQuery } from "react-responsive";
import UserNavigation from "./UserNavigation";
import DesktopMenu from "./DesktopMenu";
import classes from "./NavigationBar.module.css";
import MobileMenu from "./MobileMenu";

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
