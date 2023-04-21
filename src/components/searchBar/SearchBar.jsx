import React from "react";
import SearchIcon from "../icons/search/SearchIcon";
import styles from "./styles.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar_wrapper}>
      <input type="text" />
      <SearchIcon />
    </div>
  );
}

export default SearchBar;
