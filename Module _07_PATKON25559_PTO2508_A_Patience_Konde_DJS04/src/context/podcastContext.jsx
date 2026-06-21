import React, { createContext, useState, useEffect, useMemo } from "react";

/**
 * @typedef podcast
 * @property {number} id - Unique identifier.
 * @property {string} title - Podcast title.
 * @property {string} updateDate - Last update date.
 * @property {string []} genre - Array of genre IDs.
 * @property {string} image -  URL to podcast artwork.
 * @property {number} Season - Number of seasons.
 */
/**
 * Sorting options available to the user for viewing the podcast list.
 * @type {{key: string, label: string}[]}
 */
export const SORT_OPTIONS = [
    { key: "default", label: "Default" },
    { key: "date_desc", label: "Newest" },
    { key: "date_asc", label: "Oldest" },
    { key: "title_asc", label: "Title A-Z" },
    { key: "title_desc", label: "Title Z-A" },
];

/**
    * React context  for sharing podcast state across components.
    * Must be used within a <podcastProvider> 
    * 
 */
export const PodcastContext = createContext();

/**
 * PodcastProvider components wraps children in  a context with state for 
 * seachin, sorting, filtering and pagination of podcast data
 * @param {{children: React.ReactNode, initialPodcasts: podcast[]}} props
 * @returns {JSX.Element}
 */

export function PodcastProvider({ children, initialPodcasts = [] }) {
    const [search, setSearch] = useState("");
    const [sortKey, setSortKey] = useState("date_desc");
    const [genre, setGenre] = useState("all");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    /**
     * Dynamically calculate how many card can fit on screen.
     * set a fix 10 cards for table and smaller screens
     */

    useEffect(() => {
        const calculatePageSize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setPageSize(10);
                return;
            }
            const cardWidth = 260;
            const maxRows = 2;
            const columns = Math.max(1, Math.floor(width / cardWidth));
            setPageSize(columns * maxRows);
        };
        calculatePageSize();
        window.addEventListener("resize", calculatePageSize);
        return () => window.removeEventListener("resize", calculatePageSize);
    }, []);

    /**
     * appliesthe current seach querry , genre filter, and sort keys
     * to the list
     * @returns{podcast[]} filter and sorted podcasts
     */

    const applyFilter = () => {
        let data = Array.isArray(initialPodcasts) ? [...initialPodcasts] : [];

        if (search.trim()) {
            const q = search.toLowerCase();
            data = data.filter((p) => p.title && p.title.toLowerCase().includes(q));
        }

        if (genre !== "all") {
            const gid = Number(genre);
            data = data.filter((p) => Array.isArray(p.genre) && p.genre.includes(gid));
        }

        switch (sortKey) {
            case "title_asc":
                data.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
                break;
            case "title_desc":
                data.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
                break;
            case "date_asc":
                data.sort((a, b) => new Date(a.updateDate || a.updated || 0) - new Date(b.updateDate || b.updated || 0));
                break;
            case "date_desc":
                data.sort((a, b) => new Date(b.updateDate || b.updated || 0) - new Date(a.updateDate || a.updated || 0));
                break;
            case "default":
            default:
                break;
        }

        return data;
    };

    const filtered = useMemo(() => applyFilter(), [initialPodcasts, search, genre, sortKey]);
    const totalPage = Math.max(1, Math.ceil(filtered.length / pageSize));
    const currentPage = Math.min(page, totalPage);
    const paged = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    useEffect(() => setPage(1), [search, sortKey, genre, pageSize]);

    const value = {
        search,
        setSearch,
        sortKey,
        setSortKey,
        genre,
        setGenre,
        page: currentPage,
        setPage,
        pageSize,
        setPageSize,
        totalPage,
        filtered,
        paged,
    };

    return <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>;

    



}
    

