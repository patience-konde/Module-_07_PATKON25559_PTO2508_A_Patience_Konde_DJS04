import React from 'react';
import PodcastCard from "./PodcastCard";   // ✅ Corrected import
import styles from "./podcastGrid.module.css";

export default function PodcastGrid({ podcasts, genres }) {
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

