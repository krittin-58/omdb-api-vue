<template>
  <div class="similar-scroll">
    <div class="similar-track">
      <div
        class="similar-card"
        v-for="item in movieSimilar"
        :key="item.imdbID"
      >
        <div class="card-poster">
          <img
            v-if="item.Poster && item.Poster !== 'N/A'"
            :src="item.Poster"
            :alt="item.Title"
          >
          <div v-else class="no-poster">
            <span>&#127910;</span>
          </div>
        </div>
        <div class="card-info">
          <p class="card-title">{{ item.Title }}</p>
          <p class="card-meta">{{ item.Year }} &middot; {{ item.Type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'similarMovie',
  props: ['movieSimilar'],
};
</script>

<style scoped>
.similar-scroll {
  overflow-x: auto;
  padding-bottom: 8px;
  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.similar-scroll::-webkit-scrollbar {
  height: 4px;
}

.similar-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.similar-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.similar-track {
  display: flex;
  gap: 14px;
  min-width: max-content;
}

.similar-card {
  width: 130px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.2s;
}

.similar-card:hover {
  transform: translateY(-4px);
}

.card-poster {
  width: 130px;
  height: 190px;
  border-radius: 10px;
  overflow: hidden;
  background: #12121e;
  border: 1px solid rgba(255, 255, 255, 0.07);
  margin-bottom: 10px;
}

.card-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.no-poster {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: #30303a;
}

.card-info {
  padding: 0 2px;
}

.card-title {
  font-size: 13px;
  font-weight: 500;
  color: #d0d0e8;
  line-height: 1.3;
  margin: 0 0 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-meta {
  font-size: 11px;
  color: #6b6b8a;
  margin: 0;
  text-transform: capitalize;
}
</style>
