<template>
  <div v-if="movieResponse.title" class="movie-details">
    <!-- Hero: Poster + Core Info -->
    <div class="movie-hero">
      <div class="poster-wrap">
        <img
          :src="movieResponse.poster !== 'N/A' ? movieResponse.poster : ''"
          :alt="movieResponse.title"
          class="poster-img"
        >
      </div>

      <div class="movie-info">
        <div class="badges-row">
          <span
            class="badge badge-rated"
            v-if="movieResponse.rated && movieResponse.rated !== 'N/A'"
          >{{ movieResponse.rated }}</span>
          <span
            class="badge badge-type"
            v-if="movieResponse.type && movieResponse.type !== 'N/A'"
          >{{ movieResponse.type }}</span>
        </div>

        <h1 class="movie-title">{{ movieResponse.title }}</h1>

        <p class="movie-meta">
          <span v-if="movieResponse.year && movieResponse.year !== 'N/A'">
            {{ movieResponse.year }}
          </span>
          <span class="sep" v-if="movieResponse.runtime && movieResponse.runtime !== 'N/A'">·</span>
          <span v-if="movieResponse.runtime && movieResponse.runtime !== 'N/A'">
            {{ movieResponse.runtime }}
          </span>
          <span
            class="sep"
            v-if="movieResponse.releasedDate && movieResponse.releasedDate !== 'N/A'"
          >·</span>
          <span v-if="movieResponse.releasedDate && movieResponse.releasedDate !== 'N/A'">
            {{ movieResponse.releasedDate }}
          </span>
        </p>

        <div
          class="rating-row"
          v-if="movieResponse.imdbRating && movieResponse.imdbRating !== 'N/A'"
        >
          <div class="imdb-rating">
            <span class="imdb-label">IMDb</span>
            <span class="imdb-score">{{ movieResponse.imdbRating }}</span>
            <span class="imdb-total">/10</span>
          </div>
          <span class="votes" v-if="movieResponse.imdbVoted && movieResponse.imdbVoted !== 'N/A'">
            {{ movieResponse.imdbVoted }} votes
          </span>
        </div>

        <div class="genre-tags" v-if="movieResponse.genre && movieResponse.genre !== 'N/A'">
          <span
            class="genre-tag"
            v-for="g in movieResponse.genre.split(', ')"
            :key="g"
          >{{ g }}</span>
        </div>

        <p class="plot-text" v-if="movieResponse.plot && movieResponse.plot !== 'N/A'">
          {{ movieResponse.plot }}
        </p>

        <div class="credit-list">
          <div
            class="credit-item"
            v-if="movieResponse.director && movieResponse.director !== 'N/A'"
          >
            <span class="credit-label">Director</span>
            <span class="credit-value">{{ movieResponse.director }}</span>
          </div>
          <div
            class="credit-item"
            v-if="movieResponse.writer && movieResponse.writer !== 'N/A'"
          >
            <span class="credit-label">Writer</span>
            <span class="credit-value">{{ movieResponse.writer }}</span>
          </div>
          <div class="credit-item" v-if="movieResponse.actors && movieResponse.actors !== 'N/A'">
            <span class="credit-label">Cast</span>
            <span class="credit-value">{{ movieResponse.actors }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Details Strip -->
    <div class="detail-strip">
      <div class="detail-chip" v-if="movieResponse.awards && movieResponse.awards !== 'N/A'">
        <span class="chip-emoji">&#127942;</span>
        <span class="chip-text">{{ movieResponse.awards }}</span>
      </div>
      <div class="detail-chip" v-if="movieResponse.boxOffice && movieResponse.boxOffice !== 'N/A'">
        <span class="chip-emoji">&#128178;</span>
        <span class="chip-text">{{ movieResponse.boxOffice }}</span>
      </div>
      <div class="detail-chip" v-if="movieResponse.language && movieResponse.language !== 'N/A'">
        <span class="chip-emoji">&#127760;</span>
        <span class="chip-text">{{ movieResponse.language }}</span>
      </div>
      <div class="detail-chip" v-if="movieResponse.country && movieResponse.country !== 'N/A'">
        <span class="chip-emoji">&#128205;</span>
        <span class="chip-text">{{ movieResponse.country }}</span>
      </div>
    </div>

    <!-- Similar Movies -->
    <div v-if="movieSimilar && movieSimilar.length" class="similar-section">
      <h2 class="section-title">Related Movies</h2>
      <movie-similar :movieSimilar="movieSimilar"></movie-similar>
    </div>
  </div>
</template>

<script>
import MovieSimilar from './MovieSimilar.vue';

export default {
  name: 'movieDetails',
  components: {
    MovieSimilar,
  },
  props: ['movieResponse', 'movieSimilar'],
};
</script>

<style scoped>
.movie-details {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* --- Hero --- */
.movie-hero {
  display: flex;
  gap: 36px;
  align-items: flex-start;
}

.poster-wrap {
  flex-shrink: 0;
  width: 220px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
}

.poster-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
}

.movie-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.badges-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 4px;
}

.badge-rated {
  background: rgba(245, 197, 24, 0.15);
  color: #f5c518;
  border: 1px solid rgba(245, 197, 24, 0.3);
}

.badge-type {
  background: rgba(255, 255, 255, 0.07);
  color: #9090b0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.movie-title {
  font-size: 34px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.8px;
  line-height: 1.15;
  margin: 0;
}

.movie-meta {
  font-size: 14px;
  color: #7070909a;
  color: #6b6b8a;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin: 0;
}

.sep {
  color: #30303a;
}

.rating-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.imdb-rating {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  background: rgba(245, 197, 24, 0.1);
  border: 1px solid rgba(245, 197, 24, 0.25);
  border-radius: 8px;
  padding: 6px 14px;
}

.imdb-label {
  font-size: 11px;
  font-weight: 700;
  color: #f5c518;
  letter-spacing: 0.5px;
}

.imdb-score {
  font-size: 22px;
  font-weight: 700;
  color: #f5c518;
  line-height: 1;
}

.imdb-total {
  font-size: 13px;
  color: #6b6b8a;
}

.votes {
  font-size: 13px;
  color: #6b6b8a;
}

.genre-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.genre-tag {
  font-size: 12px;
  font-weight: 500;
  color: #c0c0d8;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 4px 14px;
  transition: background 0.2s;
}

.genre-tag:hover {
  background: rgba(255, 255, 255, 0.1);
}

.plot-text {
  font-size: 15px;
  line-height: 1.65;
  color: #b0b0c8;
  margin: 0;
}

.credit-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 16px;
}

.credit-item {
  display: flex;
  gap: 12px;
  font-size: 14px;
  line-height: 1.4;
}

.credit-label {
  color: #6b6b8a;
  min-width: 64px;
  flex-shrink: 0;
  font-weight: 500;
}

.credit-value {
  color: #d0d0e8;
}

/* --- Detail Strip --- */
.detail-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.detail-chip {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: #12121e;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  padding: 12px 16px;
  flex: 1 1 240px;
  min-width: 0;
}

.chip-emoji {
  font-size: 18px;
  flex-shrink: 0;
  line-height: 1.2;
}

.chip-text {
  font-size: 13px;
  color: #b0b0c8;
  line-height: 1.4;
}

/* --- Similar --- */
.similar-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #e0e0f0;
  letter-spacing: -0.3px;
  margin: 0;
}

/* --- Responsive --- */
@media (max-width: 640px) {
  .movie-hero {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .poster-wrap {
    width: 180px;
  }

  .movie-title {
    font-size: 26px;
  }
}
</style>
