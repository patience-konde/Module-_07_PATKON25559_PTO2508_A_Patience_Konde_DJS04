import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/header.jsx";
import SearchBar from "./components/searchBar";
import SortSelect from "./components/sortSelect";
import GenreFilter from "./components/GenreFilter";
import PodcastGrid from "./components/PodcastGrid.jsx";
import Pagination from "./components/Pagination";
import { PodcastProvider } from "./context/PodcastContext";
import { fetchPodcast } from "./api/fetchPodcast.js";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSort, setCurrentSort] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    fetchPodcast(setPodcasts, setError, setLoading);
  }, []);

  // Filtering
  let filteredPodcasts = podcasts.filter((podcast) => {
    if (!podcast || !podcast.title) return false;
    return podcast.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (selectedGenre) {
    filteredPodcasts = filteredPodcasts.filter((podcast) =>
      podcast.genres.includes(selectedGenre)
    );
  }

  // Sorting
  if (currentSort === "title") {
    filteredPodcasts.sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
  } else if (currentSort === "updated") {
    filteredPodcasts.sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.updated) - new Date(b.updated)
        : new Date(b.updated) - new Date(a.updated)
    );
  }

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = filteredPodcasts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPodcasts.length / itemsPerPage);

  return (
    <>
      <Header />
      <PodcastProvider initialPodcasts={podcasts}>
        <main className={styles.main}>
          <section className={styles.controls}>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <SortSelect
              currentSort={currentSort}
              sortOrder={sortOrder}
              onSortChange={setCurrentSort}
              onOrderChange={setSortOrder}
            />
            <GenreFilter
              genres={genres}
              selectedGenre={selectedGenre}
              onGenreChange={setSelectedGenre}
            />
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
