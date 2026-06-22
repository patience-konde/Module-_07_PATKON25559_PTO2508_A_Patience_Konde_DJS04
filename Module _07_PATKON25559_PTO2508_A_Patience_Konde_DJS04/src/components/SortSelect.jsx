import React from 'react';
import styles from './sortSelect.module.css';

/**
 * SortSelect Component
 * @param {Function} onSortChange - Callback triggered when a new option is picked
 * @param {string} currentSort - The currently active sorting option state
 */
export default function SortSelect({ onSortChange, currentSort }) {
  
  // Handler that passes the selected dropdown value back up to the parent component
  const handleSort = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className={styles.sortContainer}>
      {/* HTML label linked to the select element for better accessibility */}
      <label className={styles.sortLabel} htmlFor="sort-dropdown">
        Sort by:
      </label>
      
      {/* Dropdown element controlled by React state */}
      <select
        id="sort-dropdown"
        className={styles.sortSelect}
        value={currentSort} // Ensures the UI matches the current parent state
        onChange={handleSort} // Fires whenever the user changes the selection
      >
        {/* Value attributes match the backend object keys for easy sorting */}
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="date-desc">Date (Newest)</option>
        <option value="date-asc">Date (Oldest)</option>
      </select>
    </div>
  );
}