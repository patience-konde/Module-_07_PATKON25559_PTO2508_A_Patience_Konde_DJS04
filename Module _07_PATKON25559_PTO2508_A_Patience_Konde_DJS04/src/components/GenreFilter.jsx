import { useContext } from "react";
import { podcastContext } from "../context/podcastContext";
import  styles from "./GeneFilter.module.css"

/**
 * @param {{genres: {id:number,name:string}[]}} pros - list of genre from data
 */
export default function Genrefilter({genre}) {
    const { genre,setGenre} =usecontext(PodcastContext);

    return (
        <select className={styles.select}
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        >
            <option value="all">all Genres </option>
            {genres.map((g) => (
                <Option key={g.id} value={g.id}>
                    {g.title}
                </Option>
            ))}

        </select>
    )
}