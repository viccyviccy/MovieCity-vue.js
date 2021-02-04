import { createApp } from 'vue';
// import { createApp, Vue } from 'vue';
import App from './App.vue';
import router from './router';
// import VueCompositionApi from '@vue/composition-api';

// Vue.use(VueCompositionApi);

createApp(App)
  .use(router)
  .mount('#app');
