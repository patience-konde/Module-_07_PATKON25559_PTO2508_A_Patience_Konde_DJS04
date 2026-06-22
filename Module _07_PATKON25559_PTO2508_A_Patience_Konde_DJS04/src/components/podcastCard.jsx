import React from "react";
import styles from "./podcastCard.module.css"; // <-- Removed the extra parentheses here

/**
 * Render a single podcast preview card with image, title, number of
 * seasons, and the last updated date.
 */
export default function PodcastCard({ podcast, genres }) {
  return (
    <div className={styles.card}>
      <img 
        className={styles.cardImg} 
        src={podcast.image} 
        alt={podcast.title} 
      />
      <h3 className={styles.cardH3}>{podcast.title}</h3>
      <p className={styles.seasons}>Seasons: {podcast.seasons}</p>
    </div>
  );
}
