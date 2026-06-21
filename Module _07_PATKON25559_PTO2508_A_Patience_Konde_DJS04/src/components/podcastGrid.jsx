import PodcastCard from "./PodcastCard";
import styles from "./podcastGrid.module.css"

/**
 * Display a grid layout of podcast preview cards.Each card includes
 * podcast details: image, title, number of seasons,
 *  genres(as styled tags), and the last updated date.
 * @param {Object} props
 * @param {array<Object>} props.podcasts - Array of podcast  objects to display.
 * @param {array<Object>} props.genres - Array of genre objects for mapping IDs to titles.
 * @return {JSX.Element} the rendered podcast grid component.
 */
export default function PodcastGrid({ podcasts, genres }) {
    if (!podcasts?.length) {
        return <p className={StyleSheet.noResults}>
            No podcasts match your seach or filter.
            </p>;
    }

    return (
        <>
         <div className={StyleSheet.grid}>
            {podcasts.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
            ))}
        </div>
        </>
      
    );
}
