import React, { useEffect } from "react";
import "./darkMode.css";
import Header from "./components/header/Header";
import styles from "./App.module.css";
import SearchBar from "./components/searchBar/SearchBar";
import WordIntro from "./components/WordIntro/WordIntro";
import Meaning from "./components/meaning/Meaning";
import { useFetch } from "./hooks/useFetch";
import DataProvider from "./contexts/DataContext";

function App() {
  const { theme } = useFetch();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <DataProvider>
      <div className={styles.application}>
        <Header />
        <SearchBar />
        <WordIntro />
        <Meaning />
      </div>
    </DataProvider>
  );
}

export default App;
