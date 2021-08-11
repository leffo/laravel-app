import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store( {
    state: {
        article: {},
    },

    actions: {
        getArticleData(context, payload) {
            axios.get('/api/article-json').then((response) => {
                context.commit('SET_ARTICLE', response.data.data);
                }).catch(() => {
                    console.log('Error');
            });
        }
    },

    getters: {

    },

    mutations: {
        SET_ARTICLE(state, payload) {
          return state.article = payload;
        },
    },
})
