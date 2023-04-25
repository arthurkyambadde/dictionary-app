import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

export function useFetch() {
  const [theme, setTheme] = useState("light");

  const {
    data,
    text,
    setData,
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
  } = useContext(DataContext);

  return {
    data,
    text,
    setData,
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
  };
}
