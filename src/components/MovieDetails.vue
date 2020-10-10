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
                  <h3 class="title is-2">
                    {{ movieResponse.title }} ({{ movieResponse.year }})
                  </h3>
                  <p class="subtitle is-5">
                   <b>Director:</b> {{ movieResponse.director }} <br>
                   <b>Plot:</b> {{ movieResponse.plot }} <br>
                   <b>Writer:</b> {{ movieResponse.writer }} <br>
                  </p>
                  <hr>
                  <p class="subtitle is-6">
                   <b>Actors:</b> {{ movieResponse.actors }} <br>
                   <b>Awards:</b> {{ movieResponse.awards }} <br>
                   <b>Box Office:</b> {{ movieResponse.boxOffice }} <br>
                   <b>Countries:</b> {{ movieResponse.country }} <br>
                   <b>Genre:</b> {{ movieResponse.genre }} <br>
                   <b>DVD:</b> {{ movieResponse.dvd }} <br>
                   <b>Language:</b> {{ movieResponse.language }} <br>
                   <b>Durations time:</b> {{ movieResponse.runtime }} <br>
                  </p>
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
