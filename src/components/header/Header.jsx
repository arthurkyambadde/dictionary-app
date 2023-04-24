import React from "react";
import styles from "./styles.module.css";
import DictionaryIcon from "../icons/dictionary/DictionaryIcon";
import LightModeIcon from "../icons/mode/LightModeIcon";
import NightModeIcon from "../icons/mode/NightModeIcon";

function Header(props) {
  const { toggleTheme, theme } = props;

  return (
    <div className={styles.header_wrapper}>
      <DictionaryIcon />
      <div onClick={toggleTheme}>
        {theme === "light" ? <LightModeIcon /> : <NightModeIcon />}
      </div>
    </div>
  );
}

export default Header;
