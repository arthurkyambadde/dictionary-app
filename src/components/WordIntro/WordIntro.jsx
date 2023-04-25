import React from "react";
import AudioIcon from "../icons/audio/AudioIcon";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";

function WordIntro() {
  const { word, pronounciation } = useFetch();

  return (
    <div className={styles.word_intro__wrapper}>
      <div>
        <h1 className={styles.word}>{word}</h1>
        <p className={styles.pronounciation}>{pronounciation}</p>
      </div>
      <div className={styles.audio_icon}>
        <AudioIcon />
      </div>
    </div>
  );
}

export default WordIntro;
