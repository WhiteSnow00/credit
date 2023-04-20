import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';



window.$ = $;
window.jQuery = $;

const app = createApp(App);

app.use(router);
app.mount('#app');
