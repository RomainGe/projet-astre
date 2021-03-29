import Vue from 'vue';
import Vuex from 'vuex';
import star from './star'
import favorite from './favorite'

Vue.use(Vuex);

new Vuex.Store({
    modules: {
        star,
        favorite
    }
})