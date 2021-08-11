require('./bootstrap');

window.Vue = require('vue').default;
import store from './store/store.js'

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('article-component', require('./components/ArticleComponent.vue').default);

const app = new Vue({
    el: '#app',
});
