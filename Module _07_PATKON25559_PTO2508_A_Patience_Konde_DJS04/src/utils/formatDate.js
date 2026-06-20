/**
 * @function formatDate
 * converts an ISO date string to a more human-readable, localised date string.
 * Example output: (e.g., "January 1, 2024").
 * 
 * @param {string} isostring - A valide  ISO 8601 date string (e.g., "2024-01-01T00:00:00Z").
 * @return {string} Formated date string in the user language and format.

 **/
export function formatDate(isostring) {
  const date = new Date(isostring);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}