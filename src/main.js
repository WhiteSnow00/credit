import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

app.use(router);
app.use(VueLazyload);

app.mount('#app');

window.$ = $;
window.jQuery = $;
