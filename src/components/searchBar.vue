<template>
  <div class="search_bar_div">
    <input
      type="search"
      id="movie-search"
      name="movieSearch"
      class="search_bar"
      aria-label="Search your movie"
    />
    <button class="search_btn">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
};
</script>

<style scoped lang="scss">
.search_bar_div {
  display: flex;
}
.search_bar {
  height: 30px;
  outline: none;
}
.search_btn {
  height: 30px;
  &:hover {
    cursor: pointer;
  }
}
</style>
