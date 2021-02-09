<template>
  <div class="about">
    <h2>The GifCity</h2>
    <p class="about_us_text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed
      culpa ab non ratione natus ad iste numquam dolorem! Distinctio magnam ab
      ad fugit animi corporis voluptatem asperiores accusamus? Aspernatur. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Soluta deserunt magnam
      odit tempora. In, ipsam. Temporibus alias similique voluptate excepturi
      minus id sed corporis nulla provident dolore, quod
      <br />Tempore beatae. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Excepturi quasi minus id iusto odit reprehenderit accusantium quia
      est voluptatibus eveniet maiores nam necessitatibus molestiae distinctio
      voluptatum, sunt impedit. Doloribus, perferendis.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@media screen and (min-width: 30px) {
  h2 {
    color: #fff;
    font-size: 30px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }
  .about {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 90vw;
    height: 70vh;
    background-color: rgba(255, 255, 255, 0.61);
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: Comic Sans MS, Comic Sans, cursive;
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

  .about_us_text {
    display: flex;
    width: 70vw;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-size: 20px;
    line-height: 40px;
  }
}
@media screen and (min-width: 768px) {
  .about_us_text {
    display: flex;
    width: 70vw;
    font-family: Comic Sans MS, Comic Sans, cursive;
    /* font-size: 40px; */
    line-height: 60px;
  }
}
</style>
