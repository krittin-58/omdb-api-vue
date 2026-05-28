<template>
  <div class="skeleton-wrap">
    <!-- Hero: poster + info -->
    <div class="skeleton-hero">
      <div class="skel poster-skel shimmer"></div>

      <div class="skeleton-info">
        <div class="badges-row">
          <div class="skel badge-skel shimmer"></div>
          <div class="skel badge-skel shimmer" style="width:52px"></div>
        </div>
        <div class="skel title-skel shimmer"></div>
        <div class="skel meta-skel shimmer"></div>
        <div class="skel rating-skel shimmer"></div>
        <div class="genre-row">
          <div class="skel genre-skel shimmer"></div>
          <div class="skel genre-skel shimmer" style="width:68px"></div>
          <div class="skel genre-skel shimmer" style="width:54px"></div>
        </div>
        <div class="plot-lines">
          <div class="skel line-skel shimmer"></div>
          <div class="skel line-skel shimmer"></div>
          <div class="skel line-skel shimmer" style="width:72%"></div>
        </div>
        <div class="credit-lines">
          <div class="skel line-skel shimmer" style="width:55%"></div>
          <div class="skel line-skel shimmer" style="width:60%"></div>
          <div class="skel line-skel shimmer" style="width:65%"></div>
        </div>
      </div>
    </div>

    <!-- Detail strip -->
    <div class="skeleton-strip">
      <div class="skel chip-skel shimmer"></div>
      <div class="skel chip-skel shimmer"></div>
      <div class="skel chip-skel shimmer"></div>
      <div class="skel chip-skel shimmer"></div>
    </div>

    <!-- Similar cards -->
    <div class="skeleton-similar">
      <div class="skel section-title-skel shimmer"></div>
      <div class="similar-row">
        <div class="similar-card-skel" v-for="n in 6" :key="n">
          <div class="skel card-poster-skel shimmer"></div>
          <div class="skel card-line-skel shimmer"></div>
          <div class="skel card-line-skel shimmer" style="width:55%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieSkeleton',
};
</script>

<style scoped>
/* Base shimmer animation */
@keyframes shimmer {
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
}

.shimmer {
  background: linear-gradient(
    90deg,
    #1a1a2a 25%,
    #25253a 50%,
    #1a1a2a 75%
  );
  background-size: 1200px 100%;
  animation: shimmer 1.6s infinite linear;
  border-radius: 6px;
}

.skel {
  flex-shrink: 0;
}

/* Hero */
.skeleton-hero {
  display: flex;
  gap: 36px;
  align-items: flex-start;
}

.poster-skel {
  width: 220px;
  height: 330px;
  border-radius: 12px;
  flex-shrink: 0;
}

.skeleton-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.badges-row {
  display: flex;
  gap: 8px;
}

.badge-skel {
  height: 22px;
  width: 40px;
  border-radius: 4px;
}

.title-skel {
  height: 36px;
  width: 65%;
  border-radius: 8px;
}

.meta-skel {
  height: 16px;
  width: 45%;
}

.rating-skel {
  height: 40px;
  width: 140px;
  border-radius: 8px;
}

.genre-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.genre-skel {
  height: 26px;
  width: 80px;
  border-radius: 20px;
}

.plot-lines {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.credit-lines {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 16px;
}

.line-skel {
  height: 14px;
  width: 100%;
}

/* Detail strip */
.skeleton-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.chip-skel {
  height: 64px;
  flex: 1 1 240px;
  border-radius: 10px;
}

/* Similar section */
.skeleton-similar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title-skel {
  height: 20px;
  width: 140px;
}

.similar-row {
  display: flex;
  gap: 14px;
  overflow: hidden;
}

.similar-card-skel {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  width: 130px;
}

.card-poster-skel {
  width: 130px;
  height: 190px;
  border-radius: 10px;
}

.card-line-skel {
  height: 12px;
  width: 80%;
}

/* Responsive */
@media (max-width: 640px) {
  .skeleton-hero {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .poster-skel {
    width: 180px;
    height: 270px;
  }

  .title-skel {
    width: 80%;
  }
}
</style>
