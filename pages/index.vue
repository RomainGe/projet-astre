<template>
    <div class="container">
        <div class="pt-10 flex justify-center rounded-lg text-lg" role="group">
          <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white border border-r-0 border-blue-500 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" @click="filterList('all')">All</button>
          <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline" @click="filterList('planet')">Planet</button>
          <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline" @click="filterList('moons')">Moons</button>
          <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white border border-l-0 border-blue-500 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" @click="filterList('favorites')">Favorites</button>
        </div>
        <div class="px-5 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 shadow-md pt-10">
            <div v-for="(star, index) in starList" :key="index">
                <StarCard :star="star" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
    data() {
        return {
          starList: [],
        }
    },
    computed: {
        getStars() {
            return this.$store.state.star.starList;
        },
    },
    methods: {
      filterList(filter: string){
        if(filter == 'planet'){
          this.starList = this.$store.state.star.starList.filter((star: { isPlanet: boolean; }) => star.isPlanet == true );
        }else if(filter == 'all'){
          this.starList = this.$store.state.star.starList;
        }else if(filter == 'moons'){
          this.starList = this.$store.state.star.starList.filter((star: { moons: []; }) => star.moons != null );
        }else if(filter == 'favorites'){
          this.starList = this.$store.state.favorite.favoriteList;
        }
      }
    },
    async created() {
        await this.$store.dispatch('star/getAllStars');
        this.starList = this.$store.state.star.starList;
    }
})
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    min-width: 100%;
    background: url('assets/background-space.png') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>
