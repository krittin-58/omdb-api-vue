<template>
  <div class="column">
            <div class="box has-text-left" >

              <article class="media" v-for="item in movieSimilar" :key="item.index">
                <figure class="media-left" >
                  <p class="image is-64x64" >
                    <img :src="item.Poster">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ item.Title }}</strong> |
                      <small>({{ item.Year }})</small> |
                      <small>{{ item.Type }}</small>
                      <br>
                      <!-- <a href="#">{{ item.imdbID }}</a> -->
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
</template>

<script>
export default {
  name: 'similarMovie',
  props: ['movieSimilar'],
};
</script>
