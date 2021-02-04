<template>
  <!-- <div class="main__div"> -->
  <div class="navigation_div" id="wrapper">
    <img src="./assets/images/logo.png" alt="Movie City" class="logo_img" />
    <div id="nav">
      <router-link to="/">Gifs</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <!-- </div> -->

  <router-view />
</template>

<script>
// import SearchBar from '@/components/searchBar.vue';

export default {
  name: 'App',
  components: {},

  props: {},
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
  /* background-image: url('./assets/images/movies_bckg.jpg'); */
  /* background-size: cover; */
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
  body {
    position: relative;
  }
  .navigation_div {
    display: flex;
    flex-flow: nowrap;
  }

  #nav {
    display: flex;
    flex-flow: column;
    height: 150px;
    padding: 20px;
    background-color: rgb(160, 104, 104);
    left: 1%;
    top: 50%;
    position: absolute;
    router-link {
      color: white;
    }
  }

  .search_bar_component {
    width: 150px;
    height: 35px;
  }
}
</style>
