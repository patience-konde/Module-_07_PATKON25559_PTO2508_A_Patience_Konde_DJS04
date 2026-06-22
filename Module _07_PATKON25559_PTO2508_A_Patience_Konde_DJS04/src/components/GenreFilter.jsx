import React, { useContext } from 'react';
import { PodcastContext } from '../context/PodcastContext'; // Adjust path if needed
import styles from './GenreFilter.module.css'; // Adjust path if needed

export default function GenreFilter({ genres }) {
  const context = useContext(PodcastContext);

  // Safety fallback: prevents crash if provider is missing
  if (!context) {
    console.error("GenreFilter must be used within a PodcastContextProvider");
    return null; 
  }

  const { genre, setGenre } = context;

  return (
    <select 
      className={styles.select} 
      value={genre || 'all'} 
      onChange={(e) => setGenre(e.target.value)}
    >
      <option value="all">All Genres</option>
      {genres && genres.map((g) => (
        <option key={g.id} value={g.id}>
          {g.title}
        </option>
      ))}
    </select>
  );
}
