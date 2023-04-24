import { useState } from "react";

export function useFetch() {
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [data, setData] = useState("");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return {
    toggleTheme,
    data,
    setData,
    isLoading,
    setIsLoading,
    searchWord,
    setTheme,
    theme,
    setText,
    text,
    error,
    setError,
  };
}
