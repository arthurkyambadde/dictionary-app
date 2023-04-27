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
      <span className={styles.app_name}>Your Dictionary</span>
      <div onClick={toggleTheme}>
        {theme !== "light" ? <NightModeIcon /> : <LightModeIcon />}
      </div>
    </div>
  );
}

export default Header;
