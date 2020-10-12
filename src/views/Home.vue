<template>
    <div class="container">
      <input type="text" v-model="movieId" v-on:keyup.enter="getMovie(movieId)"
        placeholder="Please enter movie"><br><br>
        <movie-details
          :movieResponse="movieResponse"
          :movieSimilar="movieSimilar">
        </movie-details><br>
    </div>
</template>

<script>
import config from '../services/api';
import MovieDetails from '../components/MovieDetails.vue';

export default {
  name: 'Home',
  components: {
    MovieDetails,
  },

  data() {
    return {
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
      movieSimilar: {},
    };
  },

  mounted() {
    this.getMovie('joker'); // default movie ID
  },

  methods: {
    async getMovie(keyword) {
      try {
        const response = await config.getMovies(keyword);
        const moviesRes = response;

        this.movieResponse.title = moviesRes.Title;
        this.movieResponse.actors = moviesRes.Actors;
        this.movieResponse.awards = moviesRes.Awards;
        this.movieResponse.poster = moviesRes.Poster;
        this.movieResponse.boxOffice = moviesRes.BoxOffice;
        this.movieResponse.country = moviesRes.Country;
        this.movieResponse.dvd = moviesRes.DVD;
        this.movieResponse.director = moviesRes.Director;
        this.movieResponse.genre = moviesRes.Genre;
        this.movieResponse.language = moviesRes.Language;
        this.movieResponse.metaScore = moviesRes.MetaScore;
        this.movieResponse.plot = moviesRes.Plot;
        this.movieResponse.poster = moviesRes.Poster;
        this.movieResponse.production = moviesRes.Production;
        this.movieResponse.rated = moviesRes.Rated;
        this.movieResponse.ratings = moviesRes.Ratings;
        this.movieResponse.releasedDate = moviesRes.Released;
        this.movieResponse.response = moviesRes.Response;
        this.movieResponse.runtime = moviesRes.Runtime;
        this.movieResponse.type = moviesRes.Type;
        this.movieResponse.website = moviesRes.Website;
        this.movieResponse.writer = moviesRes.Writer;
        this.movieResponse.year = moviesRes.Year;
        this.movieResponse.imdbID = moviesRes.imdbID;
        this.movieResponse.imdbRating = moviesRes.imdbRating;
        this.movieResponse.imdbVoted = moviesRes.imdbVoted;
      } catch (error) {
        // eslint-disable-next-line no-alert
        this.movieResponse = error;
      }

      this.getMovieSimilar(this.movieResponse.title);
    },

    async getMovieSimilar(movieName) {
      try {
        const response = await config.getMovieSimilar(movieName);
        const movieSimilarRes = response;
        this.movieSimilar = movieSimilarRes.Search;
      } catch (error) {
        this.movieSimilar = error;
      }
    },
  },
};
</script>
