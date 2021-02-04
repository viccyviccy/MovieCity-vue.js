<template>
  <div class="home">
    <SearchBar class="search_bar_component" query="query" />
    <theMovie />
    <button :click="handleClick">click me</button>
    <div class="try-here"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/searchBar.vue';
import theMovie from '@/components/theMovie.vue';

export default {
  name: 'Home',
  components: {
    theMovie,
    SearchBar,
  },
  props: {},
  setup() {
    // const btn = document.querySelector('.get-the-search');
    const tBody = document.querySelector('.try-here');

    // btn.addEventListener('click', handleClick);

    // Напишем функцию которая будет возвращать результат fetch (обещание) к указаному url
    function getTheMovie(query) {
      return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error('Error fetching data');
        })
        .catch(err => {
          console.error('Error: ', err);
        });
    }

    // Получает массив объектов валют и рендерит результат
    function updateView(movieResults) {
      const htmlString = movieResults.reduce(
        (acc, show) => acc + renderTheResults(show),
        '',
      );

      tBody.innerHTML = htmlString;
    }

    // При клике вызовем getTheMovie и после того как
    // обещание выполнятся, внутри then отрендерим результат по шаблону
    function handleClick() {
      getTheMovie().then(updateView);
    }

    function renderTheResults({ image, name }) {
      return `
        <ul class="theMovie_movieCard_div">
            <li class="movieCard_div" v-for="el of showResults" :key="el">
              <img src=${image} alt="movie" class="movie_image" />
              <p>${name}</p>
              <p>desc</p>
            </li>
          </ul>
  `;
    }
