import React from "react";
import classes from "./Header.module.css";
import NavigationBar from "../Navigation/NavigationBar";

const Header = () => {
  return (
    <header className={classes["page-header"]}>
      <NavigationBar />
    </header>
  );
};

export default Header;
