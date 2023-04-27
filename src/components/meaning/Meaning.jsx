import React from "react";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";
import Means from "./Means";
import { INVALID_WORD_ENTERED } from "../../constants/errors.ts";

function Meaning() {
  const { nounUsage, synonym, verbUsage, sourceUrls, error } = useFetch();

  return (
    <>
      {nounUsage.length > 0 && error !== INVALID_WORD_ENTERED && (
        <div className={styles.meaning_wrapper}>
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

          <div>
            <h3 className={styles.antimeria}>Verb</h3>
            <Means data={verbUsage} />
          </div>

          <p className={styles.source}>
            <span>source:</span>
            <a href={sourceUrls[0]} target="_blank" rel="noreferrer">
              {sourceUrls[0]}
            </a>
          </p>
        </div>
      )}
    </>
  );
}

export default Meaning;
