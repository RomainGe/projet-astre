import Vue from 'vue';
import Vuex from 'vuex';
import star from './star'

Vue.use(Vuex);

new Vuex.Store({
    modules: {
        star
    }
})