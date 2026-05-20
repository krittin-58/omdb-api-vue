<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <span class="footer-brand">&#127916; CineSearch</span>
      <span class="footer-divider">|</span>
      <span class="footer-note">Not affiliated with IMDb. Powered by OMDb API.</span>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #080810;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 20px 32px;
  margin-top: auto;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-brand {
  font-size: 14px;
  font-weight: 600;
  color: #f5c518;
}

.footer-divider {
  color: #2a2a3a;
}

.footer-note {
  font-size: 13px;
  color: #40405a;
}
</style>
