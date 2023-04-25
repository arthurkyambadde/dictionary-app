import React, { useEffect, useState } from "react";
import "./darkMode.css";
import Header from "./components/header/Header";
import styles from "./App.module.css";
import SearchBar from "./components/searchBar/SearchBar";
import WordIntro from "./components/WordIntro/WordIntro";
import Meaning from "./components/meaning/Meaning";
import DataProvider from "./contexts/DataContext";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <DataProvider>
      <div className={styles.application}>
        <Header toggleTheme={toggleTheme} />
        <SearchBar />
        <WordIntro />
        <Meaning />
      </div>
    </DataProvider>
  );
}

export default App;
