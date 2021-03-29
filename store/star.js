export default {
    state: () => ({
        starList: []
    }),
    mutations: {
        setStarList(state, starList) {
            for (let i = 0; i < starList.length; i++) {
                starList[i].isFavorite = false;
            }
            state.starList = starList
        },
    },
    actions: {
        async getAllStars({ commit }) {
            const starList = await this.$axios.$get('https://api.le-systeme-solaire.net/rest/bodies/')
            if (starList.bodies.length > 0) {
                commit('setStarList', starList.bodies)
            }
        },
        async getStar({}, param) {
            const star = await this.$axios.$get(`https://api.le-systeme-solaire.net/rest/bodies/${param.id}`)
            return star;
        },
    }
}