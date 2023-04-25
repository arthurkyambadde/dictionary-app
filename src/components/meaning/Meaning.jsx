import React, { useState } from "react";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";

function Meaning() {
  return (
    <div className={styles.meaning_wrapper}>
      <div>
        <h3 className={styles.antimeria}>noun</h3>
        <p className={styles.meaning}>meaning</p>
        <ul>
          <li>A set of keys used to operate a typewriter, computer etc.</li>
        </ul>
        <p className={styles.synonyms}>
          <span>Synonyms</span>
          <span className={styles.synonym}>electronic</span>
        </p>
      </div>
      <div>
        <h3 className={styles.antimeria}>Verb</h3>
        <p className={styles.meaning}>meaning</p>
        <ul>
          <li>A set of keys used to operate a typewriter, computer etc.</li>
        </ul>
      </div>
      <p className={styles.source}>
        <span>source:</span>
        <a href="" target="_blank">
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </p>
    </div>
  );
}

export default Meaning;
