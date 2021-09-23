/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');
import {createApp} from 'vue';
import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import Default from './layouts/Default.vue';
import NoSidebar from './layouts/NoSidebar.vue';

const app = createApp(App)


app.use(router);
app.use(store);

app.component("default-layout", Default);
app.component("no-sidebar-layout", NoSidebar);

app.mount('#app');
