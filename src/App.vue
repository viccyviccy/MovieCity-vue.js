<template>
  <div class="navigation_div" id="wrapper">
    <!-- <img src="./assets/images/logo.png" alt="Movie City" class="logo_img" /> -->
    <div class="title ">
      <h1>The<br />GifCity</h1>
    </div>
    <div id="nav">
      <router-link to="/">Gifs</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>

  <transition name="fade">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style lang="scss">
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* transition end */

body,
html {
  padding: 0;
  margin: 0;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-size: cover; */
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  background: linear-gradient(
    -45deg,
    #ddd6f3,
    #83bcbe,
    #faaca8,
    #bde2e4,
    #be83be
  );
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

/* gifCity title */
.title {
  font-family: 'Montserrat';
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
  letter-spacing: 1px;
}

h1 {
  background-image: url(https://media.giphy.com/media/l3V0HEiQoSPsfkity/giphy.gif);
  background-size: cover;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 50px;
  line-height: 0.75;
  margin: 10px 0;
  font-family: 'Lobster';
  text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
  transform: rotate(-7.5deg);
}
/* styling my button */

.white-mode {
  text-decoration: none;
  padding: 7px 10px;
  background-color: #122;
  border-radius: 3px;
  color: #fff;
  transition: 0.5s ease-in-out;
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-family: 'Montserrat';
}

.white-mode:hover {
  background-color: #fff;
  color: #122;
}

/* gifCity title end */

.logo_img {
  display: block;
  width: 180px;
}

@media screen and (min-width: 320px) {
  #nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    a {
      text-decoration: none;
      font-weight: bold;
      color: #fff;
      text-transform: uppercase;
      text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
      padding: 10px 50px;
      transition: 0.5s ease-in-out;
      font-family: Comic Sans MS, Comic Sans, cursive;
      border-radius: 5px;
      text-align: center;
      &.router-link-exact-active {
        color: rgb(225, 148, 228);
        text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
        background-color: rgba(255, 255, 255, 0.425);
        box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
      }
    }
  }
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
    padding: 20px;
    background-color: #bde2e4;
    left: 1%;
    top: 50%;
    position: absolute;
    z-index: 222;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.082), 0 1px 2px rgba(0, 0, 0, 0.096);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    a {
      padding: 10px;
      margin: 10px 0;
      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
      &.router-link-exact-active {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.144),
          0 10px 10px rgba(0, 0, 0, 0.103);
      }
    }
  }

  .search_bar_component {
    width: 150px;
    height: 35px;
  }
}
</style>
