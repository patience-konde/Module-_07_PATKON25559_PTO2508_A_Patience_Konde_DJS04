import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/header.jsx";
import SearchBar from "./components/searchBar";
import SortSelect from "./components/sortSelect";
import GenreFilter from "./components/GenreFilter";
import PodcastGrid from "./components/PodcastGrid";
import Pagination from "./components/Pagination";
import { PodcastProvider } from "./context/PodcastContext";
import { fetchPodcast } from "./api/fetchPodcast.js";

// Hardcoded genres with proper Numeric IDs matching the public Netlify podcast API schema
const genres = [
  { id: 1, title: "Personal Growth" },
  { id: 2, title: "Investigative Journalism" },
  { id: 3, title: "History" },
  { id: 4, title: "Comedy" },
  { id: 5, title: "Entertainment" },
  { id: 6, title: "Business" },
  { id: 7, title: "Fiction" },
  { id: 8, title: "News" },
  { id: 9, title: "Kids and Family" }
];

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchQuery, setSearchQuery] = useState("")
  const [currentSort,setCurrentSort] = useState("")
  const [sortOrder, setSortOrder] = useState('asc')


  useEffect(() => {
    fetchPodcast(setPodcasts, setError, setLoading);

    const filteredPodcast=podcasts.filter((podcast) => {
        if (!podcast || !podcast.title) return false;
        return podcast.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = podcasts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(podcasts.length / itemsPerPage);

  return (
    <>
      <header />
      <PodcastProvider initialPodcasts={podcasts}>
        <main className={styles.main}>
          <section className={styles.controls}>
            <SearchBar />
            <SortSelect />
            <GenreFilter genres={genres} />
          </section>

          {loading && (
            <div className={styles.messageContainer}>
              <div className={styles.spinner}></div>
              <p>Loading podcasts...</p>
            </div>
          )}

          {!loading && error && (
            <div className={styles.messageContainer}>
              <p>Something went wrong: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
           
              <PodcastGrid podcasts={currentCards} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
              />
            </>
          )}
        </main>
      </PodcastProvider>
    </>
  );
}
