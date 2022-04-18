import classes from "./MobileMenuSlider.module.css";

const MobileMenuSlider = (props) => {
  return (
    <div className={classes["mobile-menu-slider"]}>
      <button onClick={props.onClick} className={classes["close-slider-btn"]}>
        Close
      </button>
      <ul className={classes["mobile-navigation"]}>
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
    </div>
  );
};

export default MobileMenuSlider;
