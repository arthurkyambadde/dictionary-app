import React, { useState, createContext } from "react";
import {
  INVALID_WORD_ENTERED,
  NO_WORD_ENTERED_YET,
} from "../constants/errors.ts";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");

  //meaning definitions
  const [word, setWord] = useState("");
  const [pronounciation, setPronounciation] = useState("");
  const [audio, setAudio] = useState("");
  const [nounUsage, setNounUsage] = useState([]);
  const [verbUsage, setVerbUsage] = useState([]);
  const [synonym, setSynonym] = useState([]);
  const [sourceUrls, setSourceUrls] = useState([]);

  const searchWord = async () => {
    setIsLoading(true);
    setError("");
    setWord(text);
    setNounUsage([]);
    setVerbUsage([]);
    setSynonym([]);
    setSourceUrls([]);
    setPronounciation([]);
    setAudio("");
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.status === 404) {
        throw new Error(INVALID_WORD_ENTERED);
      }

      setWord(result[0].word);
      setNounUsage(result[0].meanings[0].definitions);
      setVerbUsage(result[0].meanings[1].definitions);
      setSynonym(result[0].meanings[0].synonyms);
      setSourceUrls(result[0].sourceUrls);
      setPronounciation(result[0].phonetics[1].text);
      setAudio(result[0].phonetics[1].audio);
    } catch (err) {
      if (text.length === 0) {
        setError(NO_WORD_ENTERED_YET);
      } else {
        setError(INVALID_WORD_ENTERED);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        text,
        setError,
        setIsLoading,
        setText,
        error,
        isLoading,
        searchWord,
        word,
        nounUsage,
        verbUsage,
        synonym,
        sourceUrls,
        pronounciation,
        audio,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
