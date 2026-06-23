import React, { useState } from "react";
import styles from "./searchBar.module.css"; 

export default function SearchBar({ value, onChange, placeholder = "Search episodes, shows, or hosts..." }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.input}
      />
      {value && (
        <button onClick={handleClear} className={styles.clearButton} aria-label="Clear search">
          ✕
        </button>
      )}
    </div>
  );
}
