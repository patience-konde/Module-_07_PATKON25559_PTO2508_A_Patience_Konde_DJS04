import React from 'react';
import PodcastCard from "../podcastCard";
import styles from "./podcastGrid.module.css";

/**
 * Display a grid layout of podcast preview cards.
 */
export default function podcastGrid({ podcasts, genres }) {
  if (!podcasts || podcasts.length === 0) {
    return <p className={styles.noResults}>No podcasts match your search or filter.</p>;
  }

  return (
    <div className={styles.grid}>
      {podcasts.map((podcast) => (
        <PodcastCard 
          key={podcast.id} 
          podcast={podcast} 
          genres={genres} 
        />
      ))}
    </div>
  );
}

