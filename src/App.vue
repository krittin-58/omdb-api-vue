<template>
  <div id="app">
    <nav class="app-nav">
      <div class="nav-brand">
        <span class="brand-icon">&#127916;</span>
        <span class="brand-name">CineSearch</span>
      </div>
    </nav>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from './components/footer.vue';

export default {
  components: {
    FooterComponent,
  },
};
</script>

<style>
@import "https://unicons.iconscout.com/release/v2.1.11/css/unicons.css";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background-color: #0a0a12;
  color: #e0e0f0;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Inter', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-nav {
  background: rgba(10, 10, 18, 0.96);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  padding: 14px 32px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-icon {
  font-size: 22px;
  line-height: 1;
}

.brand-name {
  font-size: 20px;
  font-weight: 700;
  color: #f5c518;
  letter-spacing: -0.5px;
}
</style>
