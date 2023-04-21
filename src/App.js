import React from "react";
import Header from "./components/header/Header";
import styles from "./App.module.css";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <div className={styles.application}>
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
