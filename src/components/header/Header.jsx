import React, { useState } from "react";
import styles from "./styles.module.css";

import DictionaryIcon from "../icons/dictionary/DictionaryIcon";
import LightModeIcon from "../icons/mode/LightModeIcon";
import NightModeIcon from "../icons/mode/LightModeIcon";

function Header() {
  const [light, setLight] = useState(true);

  console.log("light", light);

  return (
    <div className={styles.header_wrapper}>
      <DictionaryIcon />
      <div onClick={() => setLight(!light)} className={styles.mode_wrapper}>
        {light ? <LightModeIcon /> : <NightModeIcon />}
      </div>
    </div>
  );
}

export default Header;
