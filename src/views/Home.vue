<template>
  <div class="home">
    <theMovie />
  </div>
</template>

<script>
// @ is an alias to /src
import theMovie from '@/components/theMovie.vue';

export default {
  name: 'Home',
  components: {
    theMovie,
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  width: 70vw;
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
/* ::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
} */
</style>
