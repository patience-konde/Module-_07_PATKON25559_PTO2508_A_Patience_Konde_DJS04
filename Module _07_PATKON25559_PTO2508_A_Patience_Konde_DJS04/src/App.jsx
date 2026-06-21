import { useEffect, useState } from "react";
import { podcastProvider } from "./context/podcastContext";
import {fetchPodcasts} from "./api/fetchPodcasts";
import { Genrres } from "./data";
import Header from "./components/Header";
import SearchBar from "./components/SeachBar";
import SortSelect from "./components/SortSelect";
import GenreFilter from "./components/GenreFilter";
import podcastGrid from "./components/podcastGrid";
import pagination from "./components/pagination";
import styles from "./App.module.css";

/**
 * Root component of the podcast explorer app.
 * handles data fetching and layout composition.
 */

export default function App() {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPodcasts(setPodcasts, setError, setLoading);
    }, []);

    return (
        <>
        <Header />
        <podcastProvider initialPodcasts={podcasts}>
            <main className={styles.main}>
                <section className={styles.controls}>
                    <seachBar />
                    <SortSelect />
                    <GenreFilter genres={Genrres} />
                </section>

                {loading && (
                    <div className={styles.messageContainer}>
                        <div className={styles.spinner}></div>
                        <p>Loading podcasts...</p>
                
                        </div>
                        
                
                )}
                
                {error && (
                    <div className={styles.message}>
                        <div className={styles.error}>
                        Error occurred while loading podcasts: {error}
                        </div>
                    </div>
                )}

                {!loading && !error && (
                    <>
                    <podcastGrid genres={Genrres} />
                    <pagination />
                    </>
                )}
            

            </main>

        </podcastProvider>
        </>
    );
}
