<template>
  <div class="container">
  <p>{{ movieResponse.title }}</p>

    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="movieResponse.poster">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <p class="title is-4">{{ movieResponse.title }}</p>
          </div>
        </div>
        <div class="content">
          <p>{{ movieResponse.plot }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'movieDetails',
  props: ['movieResponse'],
};
</script>
