/**
 * @function fetchPodcasts
 * Asynchronous function that fetches podcast data from the remote  API and updates the state accordingly.
 * Handles loading, Error, and successful data response via provided state setters.
 * 
 * @param {Function} setPodcasts - State setter function to update the podcasts array.
 * @param {Function} setError - State setter function to update the error message  (string).
 * @param {Function} setLoading - State setter function to update the loading state (boolean).
 
 * @returns {Promise<void>} - A promise that resolves when the fetch operation is complete.

 **/
export async function fetchPodcasts(setPodcasts, setError, setLoading) {
    try {
        const res = await fetch('https://podcast-api.netlify.app/');
        if (!res.ok) {
            throw new Error(` ${res.status}`);
            const data = await res.json();
            setPodcasts(data);
        }
        const data = await res.json();
        setPodcasts(data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}