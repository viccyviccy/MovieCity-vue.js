<template>
  <div class="home">
    <search-input @gifs-fetched="onGifsFetched" />
    <theMovie :gifs="gifs" />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */ /* eslint-disable no-unused-vars */

import theMovie from '@/components/theMovie.vue';

import SearchInput from '@/components/searchBar.vue';
import GifList from '@/components/theMovie.vue';

export default {
  name: 'Home',
  components: {
    theMovie,
    SearchInput,
    // eslint-disable-next-line vue/no-unused-components
    GifList,
  },
  data() {
    return {
      gifs: [],
    };
  },
  methods: {
    onGifsFetched(result) {
      console.log(result);
      this.gifs = result.data;
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 70vw;
  height: 70vh;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.61);
}

@media screen and (min-width: 320px) {
  .home {
    width: 90vw;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}

/* SCROLL BAR DESIGN */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 6px;
  border-radius: 6px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 6px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
