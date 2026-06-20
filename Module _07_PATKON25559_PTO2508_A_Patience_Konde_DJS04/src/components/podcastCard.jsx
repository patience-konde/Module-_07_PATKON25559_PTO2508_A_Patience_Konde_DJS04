import {formatDate} from '../utils/formatDate';

/**
 * render a single podcast preview card with image, title, number of 
 * seasons.
 *Genres(as styled tags), and the last updated date.
    * @param {Object} props
    * @param {Object} props.podcast - the podcast data object to display.
    * @param {string} props.podcast.id - Unique ID for the podcast.
    * @param {string} props.podcast.title - Title of the podcast.
    * @param {string} props.podcast.image - URL of the podcast's image.
    * @param {number} props.podcast.seasons - Number of seasons the podcast available.
    * @param {string} props.podcast.updated - ISO date string for the last update.
    * @param {array<object>} props.genres - Array of genre objects for mapping IDs to titles.
    * 
    * 
    * @return {JSX.Element} the rendered podcast card component.

 **/

export default function PodcastCard({podcast, genres} ) {
    const genrespans =podcast.genres.map((id) => 
    {
        const match = genres?.find((genre) => genre.id === id);
        return <span key={id} className="genre-tag">
            {match ? match.title : "unknown(${id})"}    
        </span>;
        });

    return (
        <div className="card">
            <img src={podcast.image} alt={podcast.title} />
            <h3>{podcast.title}</h3>
            <p className="seasons"> {podcast.seasons} Seasons</p>
            <div className="tags">{genrespans}</div>
            <p className="updated-text"> Updated: {formatDate(podcast.updated)}</p>
        
        </div> 
    );
}

