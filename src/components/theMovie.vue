<template>
  <div class="theMovie_div">
    <!--    <ul class="theMovie_movieCard_div" id="theMovie_ul">
      <li class="movieCard_div" v-for="el of showResults" :key="el">
        <img src="{{el.image}}" alt="movie" class="movie_image" />
        <p>Movie name in here</p>
        <p></p>
      </li>
    </ul> -->
    <div id="gifList">
      <gif v-for="gif in gifs" :gif="gif" :key="gif.id" />
    </div>
  </div>
</template>

<script>
import Gif from '@/components/theCard.vue';

export default {
  name: 'GifList',
  components: { Gif },
  props: ['gifs'],
};
</script>

<style scoped lang="scss">
.theMovie_div {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 15px 20px;
}

.theMovie_movieCard_div {
  display: flex;
}

@media screen and (min-width: 320px) {
  .theMovie_div {
    display: flex;
    width: 90vw;
    height: 90vh;
    padding: 10px;
  }
  .theMovie_movieCard_div {
    flex-flow: column;
  }
}
@media screen and (min-width: 768px) {
  .theMovie_movieCard_div {
    flex-flow: wrap;
    justify-content: space-between;
  }
  .theMovie_div {
    height: 70vh;
    width: 80vw;
    padding: 15px 20px;
  }
}

.movieCard_div {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 300px;
  width: 330px;
  border: 1px solid black;
}
.movie_image {
  width: 320px;
  height: 240px;
}

@media screen and (min-width: 768px) {
  .movieCard_div {
    width: 490px;
    height: 500px;
    padding: 5px;
  }

  .movie_image {
    width: 480px;
    height: 320px;
  }
}
</style>
