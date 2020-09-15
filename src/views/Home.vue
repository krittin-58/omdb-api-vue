<template>
    <div>
      <input type="text" v-model="movieId" v-on:keyup.enter="getMovie(movieId)">
      <p>{{ movieResponse }}</p>
    </div>
</template>

<script>
import config from '../services/api';

export default {
  name: 'Home',

  data() {
    return {
      movieResponse: null,
      movieId: null,
    };
  },

  mounted() {
    this.getMovie();
  },

  methods: {
    async getMovie(id) {
      try {
        const url = `${config.API_URL}/?apikey=${config.API_KEY}&i=${id}`;
        const response = await fetch(url);
        this.movieResponse = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>

</style>
