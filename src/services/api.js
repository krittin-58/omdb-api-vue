const API_OMDB_URL = 'https://www.omdbapi.com';
const API_OMDB_KEY = process.env.VUE_APP_OMDB_KEY || 'efcee23b';

function buildUrl(params) {
  const query = new URLSearchParams({ apikey: API_OMDB_KEY, ...params });
  return `${API_OMDB_URL}/?${query}`;
}

async function getMovies(keyword) {
  const response = await fetch(buildUrl({ t: keyword }));
  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  const data = await response.json();
  if (data.Response === 'False') {
    throw new Error(data.Error || 'Movie not found');
  }
  return data;
}

async function getMovieSimilar(movieName) {
  const response = await fetch(buildUrl({ s: movieName }));
  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }
  const data = await response.json();
  return data.Search || [];
}

export default {
  getMovies,
  getMovieSimilar,
};
