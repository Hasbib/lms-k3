import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Import Bootstrap, Popper, jQuery
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import 'charts.css';

// Import custom
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/teacher.css';
import './assets/css/sa.css';
import './assets/js/main.js';

const app = createApp(App);

// Set up axios
// axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.baseURL = process.env.VUE_APP_API_URL
app.config.globalProperties.$http = axios;

store.dispatch('fetchUser');

// Initialize router
app.use(router);

app.use(store);

// Mount the app first, then initialize AOS
app.mount('#app');
AOS.init(); // Inisialisasi AOS setelah app mount
