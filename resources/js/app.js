require('./bootstrap');

window.Vue = require('vue').default;
import store from './store/store.js'

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('article-component', require('./components/ArticleComponent.vue').default);

const app = new Vue({
    store,
    el: '#app',
    created() {
        let url = window.location.pathname;
        let slug = url.substring(url.lastIndexOf('/') + 1);

        this.$store.commit('SET_SLUG', slug);
        this.$store.dispatch('getArticleData', slug);
    },
});
