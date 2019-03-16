import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        numberOfCards: 6,
        isGameOn: false
    },
    getters: {
        generateRandomColors: function (state) {
            //создаем array
            let arr = [];
            // генерируем случайный цвет
            function randomColors() {
                // выбор красного оттенка от 0 до 255
                const r = Math.floor(Math.random() * 256);
                // выбор зелего оттенка от 0 до 255
                const g = Math.floor(Math.random() * 256);
                // выбор синего оттенка от 0 до 255
                const b = Math.floor(Math.random() * 256);

                const rgb = "rgb(" + r + ", " + g + ", " + b + ")";
                return rgb;
            }
            // добавляем num случайных цветов в array;
            for (let i = 0; i < state.numberOfCards; i++) {
                arr.push(randomColors());
            }
            //возвращаем array
            return arr;
        },
        //генерируем array с num случайных цветов
        pickColor: function (state, getters) {
            const randomColor = Math.floor(Math.random() * state.numberOfCards);
            return getters.generateRandomColors[randomColor];
        }
    },
    mutations: {
        updateNumberOfCards(state, payload) {
            state.numberOfCards = payload
        },
        setGameOn(state) {
            state.isGameOn = true;
        }
    },
    actions: {},
});