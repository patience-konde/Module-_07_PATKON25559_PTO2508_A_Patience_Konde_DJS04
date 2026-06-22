import React, { useState } from "react";
import styles from "./searchBar.module.css"; 

export default function SearchBar({ onSearch, placeholder = "Search episodes, shows, or hosts..." }) {
  // /* { "comment": "Initializes and handles local UI state for the search query string" } */
  const [query, setQuery] = useState("");

  // /* { "comment": "Synchronizes local state changes with parent hooks on every key stroke" } */
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  // /* { "comment": "Resets the input value back to empty and triggers a parent array refresh" } */
  const handleClear = () => {
    setQuery("");
    onSearch(""); 
  };


  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.input}
      />
      {query && (
        <button onClick={handleClear} className={styles.clearButton} aria-label="Clear search">
          ✕
        </button>
      )}
    </div>
  );
}