<template>
    <div>
      <div class="columns">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="movieResponse.poster" alt="Placeholder image">
              </figure>
            </div>
            <!-- <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ movieResponse.title }}</p>
                  <p class="subtitle is-6">{{ movieResponse.plot }}</p>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div class="column">
          <div class="box">
            <article class="media">
              <div class="media-content">
                <div class="content has-text-left">
                  <p class="title is-2">
                    {{ movieResponse.title }} ({{ movieResponse.year }})

                  </p>
                  <p class="subtitle is-3"></p>
                </div>
              </div>
            </article>
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
