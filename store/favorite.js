import axios from 'axios'

export default {
    state: () => ({
        favoriteList: [],
    }),
    mutations: {
        getFavoriteList() {
            return state.favoriteList;
        },
        addFavorite(state, favorite) {
            console.log("addFavorite");

            state.favoriteList.push(favorite);
        },
        removeFavorite(state, favorite) {
            // state.favoriteList.push(favorite);
        },
    },
}