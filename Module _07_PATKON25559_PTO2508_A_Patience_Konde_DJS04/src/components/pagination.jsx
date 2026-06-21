import React from 'react';
import styles from './pagination.module.css';

/**
 * Pagination Component
 * @param {number} totalItems - Total number of podcasts/episodes in your list
 * @param {number} currentPage - The current active page number (1-indexed)
 * @param {Function} onPageChange - Callback function to change the active page
 */
export default function Pagination({ totalItems, currentPage, onPageChange }) {
  const itemsPerPage = 10; // Fixed at 10 podcast cards per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Do not render the component if there is only 1 page or no items
  if (totalPages <= 1) return null;

  // Generate an array of page numbers (e.g., [1, 2, 3])
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.paginationContainer} aria-label="Podcast pagination">
      {/* Interactive pagination controls */}
      <div className={styles.buttonGroup}>
        <button
          className={styles.pageButton}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`${styles.pageButton} ${currentPage === number ? styles.activeButton : ''}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}

        <button
          className={styles.pageButton}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </button>
      </div>

      {/* Dynamic sign message pointing to the upcoming page */}
      <p className={styles.nextPageHint}>
        {currentPage < totalPages 
          ? `Click "Next" to view Page ${currentPage + 1} of your podcasts.`
          : "You are on the last page."}
      </p>
    </nav>
  );
}