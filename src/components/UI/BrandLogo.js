import { ReactComponent as SneakersLogo } from "../../assets/logo.svg";
import classes from "./BrandLogo.module.css";

const BrandLogo = () => {
  return (
    <div className={classes["brand-logo"]}>
      <h1>
        <a href="#">
          <SneakersLogo />
        </a>
      </h1>
    </div>
  );
};

export default BrandLogo;
