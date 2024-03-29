import React from "react";
import SearchIcon from "../icons/search/SearchIcon";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";

function SearchBar() {
  const { text, setText, searchWord } = useFetch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchWord();
    }
  };

  return (
    <div className={styles.searchBar_wrapper}>
      <input
        value={text}
        name="text"
        onChange={(e) => setText(e.target.value)}
        className={styles.input_area}
        placeholder={"Enter Word"}
        onKeyDown={handleKeyPress}
      />
      <div className={styles.search_icon} onClick={searchWord}>
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchBar;
