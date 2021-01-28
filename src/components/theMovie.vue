<template>
  <div class="theMovie_div">
    <h1>
      Welcome to Movie City
    </h1>
    <div class="theMovie_movieCard_div">
      <movieCard />
    </div>
  </div>
</template>

<script>
import movieCard from '@/components/movieCard.vue';

export default {
  name: 'theMovie',
  components: {
    movieCard,
  },
  // props: {
  //   msg: String,
  // },
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
</style>
