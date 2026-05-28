const API_OMDB_URL = 'https://www.omdbapi.com';
const API_OMDB_KEY = process.env.VUE_APP_OMDB_KEY || 'efcee23b';

async function getMovies(keyword) {
  const response = await fetch(`${API_OMDB_URL}/?apikey=${API_OMDB_KEY}&t=${encodeURIComponent(keyword)}`);
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
  const response = await fetch(`${API_OMDB_URL}/?apikey=${API_OMDB_KEY}&s=${encodeURIComponent(movieName)}`);
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
