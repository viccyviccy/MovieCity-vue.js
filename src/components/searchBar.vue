<template>
  <div class="search_bar_div">
    <input
      placeholder="Type and search for gifs"
      v-model="search"
      @input="onSearch"
      class="search_bar"
    />
    <div class="submit" />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      search: '',
      timeout: null,
    };
  },
  methods: {
    onSearch() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.makeSearch();
      }, 500);
    },
    makeSearch() {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${this.search}`,
      )
        .then(response => response.json())
        .then(result => {
          this.$emit('gifs-fetched', result);
        });
    },
  },
};
</script>

<style scoped lang="scss">
/* the SEARCH BAR design */

.search_bar_div {
  margin: 50px 100px;
  display: flex;
  align-self: flex-end;
  position: relative;
  height: 60px;
  float: right;
  padding: 0;
}

.search_bar {
  height: 60px;
  font-size: 55px;
  display: flex;
  border: none;
  font-size: 20px;
  outline: none;
  color: #555;
  padding: 3px;
  padding-right: 60px;
  width: 0px;
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  z-index: 3;
  transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
  cursor: pointer;
  &:focus:hover {
    border-bottom: 1px solid #bbb;
  }
  &:focus {
    width: 40vw;
    z-index: 1;
    border-bottom: 1px solid #bbb;
    cursor: text;
  }
}

.submit {
  display: flex;
  height: 67px;
  width: 63px;
  color: red;
  float: right;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=)
    center center no-repeat;
  text-indent: -10000px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.8;
  }
}
</style>
