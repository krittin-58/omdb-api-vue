<template>
  <div class="home-container">
    <div class="hero-section">
      <h1 class="hero-title">Discover Movies</h1>
      <p class="hero-subtitle">Search millions of films from the world's largest movie database</p>
      <div class="search-bar" :class="{ focused: searchFocused }">
        <i class="uil uil-search search-icon"></i>
        <input
          type="text"
          v-model="movieId"
          v-on:keyup.enter="getMovie(movieId)"
          @focus="searchFocused = true"
          @blur="searchFocused = false"
          placeholder="Search for a movie..."
          class="search-input"
        >
        <button class="search-btn" @click="getMovie(movieId)">Search</button>
      </div>
    </div>

    <div class="content-section">
      <movie-skeleton v-if="isLoading"></movie-skeleton>
      <movie-details
        v-else
        :movieResponse="movieResponse"
        :movieSimilar="movieSimilar"
      ></movie-details>
    </div>
  </div>
</template>

<script>
import config from '../services/api';
import MovieDetails from '../components/MovieDetails.vue';
import MovieSkeleton from '../components/MovieSkeleton.vue';

export default {
  name: 'Home',
  components: {
    MovieDetails,
    MovieSkeleton,
  },

  data() {
    return {
      isLoading: false,
      searchFocused: false,
      movieResponse: {
        title: '',
        actors: '',
        awards: '',
        boxOffice: '',
        country: '',
        dvd: '',
        director: '',
        genre: '',
        language: '',
        metaScore: '',
        plot: '',
        poster: '',
        production: '',
        rated: '',
        ratings: [],
        releasedDate: '',
        response: '',
        runtime: '',
        type: '',
        website: '',
        writer: '',
        year: '',
        imdbID: '',
        imdbRating: '',
        imdbVoted: '',
      },
      movieId: '',
      movieSimilar: [],
    };
  },

  mounted() {
    this.getMovie('joker');
  },

  methods: {
    async getMovie(keyword) {
      if (!keyword || !keyword.trim()) return;

      this.isLoading = true;

      try {
        const response = await config.getMovies(keyword);

        this.movieResponse.title = response.Title;
        this.movieResponse.actors = response.Actors;
        this.movieResponse.awards = response.Awards;
        this.movieResponse.poster = response.Poster;
        this.movieResponse.boxOffice = response.BoxOffice;
        this.movieResponse.country = response.Country;
        this.movieResponse.dvd = response.DVD;
        this.movieResponse.director = response.Director;
        this.movieResponse.genre = response.Genre;
        this.movieResponse.language = response.Language;
        this.movieResponse.metaScore = response.Metascore;
        this.movieResponse.plot = response.Plot;
        this.movieResponse.production = response.Production;
        this.movieResponse.rated = response.Rated;
        this.movieResponse.ratings = response.Ratings;
        this.movieResponse.releasedDate = response.Released;
        this.movieResponse.response = response.Response;
        this.movieResponse.runtime = response.Runtime;
        this.movieResponse.type = response.Type;
        this.movieResponse.website = response.Website;
        this.movieResponse.writer = response.Writer;
        this.movieResponse.year = response.Year;
        this.movieResponse.imdbID = response.imdbID;
        this.movieResponse.imdbRating = response.imdbRating;
        this.movieResponse.imdbVoted = response.imdbVotes;

        await this.getMovieSimilar(this.movieResponse.title);
      } catch (error) {
        this.movieResponse.title = '';
        this.movieSimilar = [];
      } finally {
        this.isLoading = false;
      }
    },

    async getMovieSimilar(movieName) {
      try {
        this.movieSimilar = await config.getMovieSimilar(movieName);
      } catch (error) {
        this.movieSimilar = [];
      }
    },
  },
};
</script>

<style scoped>
.home-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.hero-section {
  background: linear-gradient(160deg, #0a0a12 0%, #16082e 50%, #0a0a12 100%);
  padding: 64px 24px 56px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(245, 197, 24, 0.07) 0%, transparent 65%);
  pointer-events: none;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 10px;
  letter-spacing: -1.5px;
  position: relative;
}

.hero-subtitle {
  font-size: 15px;
  color: #6b6b8a;
  margin: 0 0 36px;
  position: relative;
}

.search-bar {
  display: flex;
  align-items: center;
  max-width: 580px;
  margin: 0 auto;
  background: #12121e;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  padding: 6px 6px 6px 20px;
  transition: border-color 0.25s, box-shadow 0.25s;
  position: relative;
}

.search-bar.focused {
  border-color: rgba(245, 197, 24, 0.5);
  box-shadow: 0 0 0 4px rgba(245, 197, 24, 0.08);
}

.search-icon {
  font-size: 18px;
  color: #6b6b8a;
  margin-right: 10px;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 15px;
  color: #e0e0f0;
  font-family: inherit;
  min-width: 0;
}

.search-input::placeholder {
  color: #40405a;
}

.search-btn {
  background: #f5c518;
  color: #0a0a12;
  border: none;
  border-radius: 40px;
  padding: 10px 26px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  font-family: inherit;
  flex-shrink: 0;
}

.search-btn:hover {
  background: #ffd740;
}

.search-btn:active {
  transform: scale(0.96);
}

.content-section {
  padding: 40px 24px 60px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}
</style>
