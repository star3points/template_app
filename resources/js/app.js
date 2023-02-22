import {createApp} from 'vue'
import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import App from './App.vue'

createApp(App).mount("#app")
