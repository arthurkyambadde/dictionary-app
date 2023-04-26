import React, { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(`
  Please enter a word whose meaning you seek 😊`);
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

      if (!response.ok) {
        setError("word not found! Please enter valid english word 😥");
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      // console.log("result is: ", JSON.stringify(result, null, 4));
      setWord(result[0].word);
      setNounUsage(result[0].meanings[0].definitions);
      setVerbUsage(result[0].meanings[1].definitions);
      setSynonym(result[0].meanings[0].synonyms);
      setSourceUrls(result[0].sourceUrls);
      setPronounciation(result[0].phonetics[1].text);
      setAudio(result[0].phonetics[1].audio);
    } catch (err) {
      setError("word not found! Please enter valid english word 😥");
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
