const API_OMDB_URL = 'https://www.omdbapi.com';
const API_OMDB_KEY = 'efcee23b';

async function getMovies(keyword) {
  const response = await fetch(`${API_OMDB_URL}/?apikey=${API_OMDB_KEY}&t=${keyword}`);
  return response.json();
}

async function getMovieSimilar(movieName) {
  const response = await fetch(`${API_OMDB_URL}/?apikey=${API_OMDB_KEY}&s=${movieName}`);
  return response.json();
}

export default {
  getMovies,
  getMovieSimilar,
};
