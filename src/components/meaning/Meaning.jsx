import React, { useState } from "react";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";
import Means from "./Means";

function Meaning() {
  const { nounUsage, synonym, verbUsage } = useFetch();

  console.log("noun", verbUsage);

  return (
    <div className={styles.meaning_wrapper}>
      {nounUsage.length > 0 && (
        <div>
          <h3 className={styles.antimeria}>noun</h3>
          <Means data={nounUsage} />
          <p className={styles.synonyms}>
            <span>Synonyms</span>
            {synonym.map((item) => {
              return (
                <span className={styles.synonym} key={item}>
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      )}
      {verbUsage.length > 0 && (
        <div>
          <h3 className={styles.antimeria}>Verb</h3>
          <Means data={verbUsage} />
        </div>
      )}
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
