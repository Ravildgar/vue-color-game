import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        numberOfCards: 6
    },
    getters: {},
    mutations: {
        increment(state) {
            state.count++
        },
        updateNumberOfCards(state, payload) {
            state.numberOfCards = payload
        }
    },
    actions: {},
});