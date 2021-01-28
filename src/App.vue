<template>
  <div class="navigation_div">
    <img src="./assets/images/logo.png" alt="Movie City" class="logo_img" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <SearchBar class="search_bar_component" />
  </div>
  <router-view />
</template>

<script>
import SearchBar from '@/components/searchBar.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('./assets/images/background_img.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
}

#nav {
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logo_img {
  display: block;
  width: 180px;
}

@media screen and (min-width: 320px) {
  .navigation_div {
    display: flex;
    flex-flow: column;
  }

  .search_bar_component {
    width: 100px;
    height: 35px;
  }
}

@media screen and (min-width: 768px) {
  .navigation_div {
    display: flex;
    flex-flow: nowrap;
  }

  .search_bar_component {
    width: 150px;
    height: 35px;
  }
}
</style>
