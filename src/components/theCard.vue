<template>
  <div
    class="gif"
    :style="`background-image: url('${gif.images.fixed_width.url}')`"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="link-to-copy" v-if="hover">
      <input
        class="the_url_to_copy"
        ref="url"
        readonly
        type="text"
        :value="gif.images.original.url"
      />
      <button @click="copy()">Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchedGif',
  props: ['gif'],
  data() {
    return {
      url: '',
      hover: false,
    };
  },
  methods: {
    copy() {
      /* Select the text field */
      this.$refs.url.select();
      this.$refs.url.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand('copy');
      this.$refs.url.value = 'Copied!!!';
    },
  },
};
</script>

<style scoped lang="scss">
.link-to-copy {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.212);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
}

input {
  display: flex;
  width: 150px;
  height: 20px;
  outline: none;
  border: none;
  border-radius: 30px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
}

button {
  display: flex;
  align-items: center;
  height: 20px;
  padding: 10px;
  margin: 10px;
  outline: none;
  border: none;
  border-radius: 30px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
}

@media screen and (min-width: 320px) {
  .gif {
    /* display: inline-flex; */
    display: flex;
    width: 220px;
    height: 220px;
    margin: 10px 0;
    justify-content: center;
    /* align-items: flex-end; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-box-sizing: padding-box;
    box-sizing: padding-box;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
}
@media screen and (min-width: 768px) {
  .gif {
    display: inline-flex;
    width: 240px;
    height: 240px;
    margin: 15px;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
