import React from "react";
import classes from "./Header.module.css";
import NavigationBar from "../Navigation/NavigationBar";

const Header = (props) => {
  return (
    <header>
      <NavigationBar />
    </header>
  );
};

export default Header;
