<template>
  <div class="about"></div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.about {
  border: 1px solid black;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 90vw;
  height: 70vh;
  background-color: rgba(255, 255, 255, 0.61);
  overflow-x: hidden;
  overflow-y: scroll;
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
