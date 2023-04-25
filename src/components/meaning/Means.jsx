import React from "react";
import styles from "./styles.module.css";

function Means({ data }) {
  return (
    <div>
      <p className={styles.meaning}>meaning</p>
      {data.map((item) => {
        return (
          <ul key={item.definition}>
            <li>{item.definition}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Means;
