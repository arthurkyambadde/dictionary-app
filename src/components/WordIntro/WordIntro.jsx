import React from "react";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";
import { INVALID_WORD_ENTERED } from "../../constants/errors.ts";

function WordIntro() {
  const { word, pronounciation, audio, nounUsage, error } = useFetch();

  const audioFile = audio;

  return (
    <div className={styles.word_intro__wrapper}>
      <div>
        <h1 className={styles.word}>{word}</h1>

        {<p className={styles.default_statement}>{error}</p>}
        {error !== INVALID_WORD_ENTERED && (
          <p className={styles.pronounciation}>{pronounciation}</p>
        )}
      </div>
      {error !== INVALID_WORD_ENTERED && (
        <div className={styles.audio_icon}>
          <div>
            {/* <AudioIcon /> */}
            {nounUsage.length > 0 && (
              <audio controls key={audioFile + Math.random().toString(36)}>
                <source src={audioFile} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WordIntro;
