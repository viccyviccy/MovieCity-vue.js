<template>
  <div class="movieCard_div">
    <img
      src="../assets/images/background_img.jpg"
      alt="movie"
      class="movie_image"
    />
    <p>Movie name in here</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum
      libero voluptates! Nemo esse soluta quos, dicta iure aliquam quaerat
      accusamus, ipsam nobis commodi animi exercitationem omnis asperiores quod
      blanditiis.
    </p>
  </div>
  <div class="movieCard_div">
    <img
      src="../assets/images/background_img.jpg"
      alt="movie"
      class="movie_image"
    />
    <p>Movie name in here</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum
      libero voluptates! Nemo esse soluta quos, dicta iure aliquam quaerat
      accusamus, ipsam nobis commodi animi exercitationem omnis asperiores quod
      blanditiis.
    </p>
  </div>
  <div class="movieCard_div">
    <img
      src="../assets/images/background_img.jpg"
      alt="movie"
      class="movie_image"
    />
    <p>Movie name in here</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum
      libero voluptates! Nemo esse soluta quos, dicta iure aliquam quaerat
      accusamus, ipsam nobis commodi animi exercitationem omnis asperiores quod
      blanditiis.
    </p>
  </div>
  <div class="movieCard_div">
    <img
      src="../assets/images/background_img.jpg"
      alt="movie"
      class="movie_image"
    />
    <p>Movie name in here</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum
      libero voluptates! Nemo esse soluta quos, dicta iure aliquam quaerat
      accusamus, ipsam nobis commodi animi exercitationem omnis asperiores quod
      blanditiis.
    </p>
  </div>
</template>

<script>
const API_KEY = 'ed5781108818e96397f9efe7bddd0923';
export default {
  name: 'movieCard',
  data: function() {
    return {
      result: '',
      responseAvailable: false,
      apiKey: { API_KEY },

      // https://api.themoviedb.org/3/movie/550?api_key=ed5781108818e96397f9efe7bddd0923
    };
  },
  methods: {
    fetchAPIData() {},
  },
};
</script>

<style scoped lang="scss">
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
