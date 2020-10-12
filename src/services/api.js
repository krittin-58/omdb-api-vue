const API_URL = 'https://www.omdbapi.com';
const API_KEY = 'efcee23b';

async function getMovies(keyword) {
  const response = await fetch(`${API_URL}/?apikey=${API_KEY}&t=${keyword}`);
  return response.json();
}

async function getMovieSimilar(movieName) {
  const response = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${movieName}`);
  return response.json();
}

export default {
  API_URL,
  API_KEY,
  getMovies,
  getMovieSimilar,
};
