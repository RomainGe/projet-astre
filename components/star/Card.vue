<template>
    <div class="w-full max-w-sm overflow-hidden rounded border bg-white shadow">
      <div class="p-3">
        <div class="grid grid-cols-2 gap-4">
          <svg @click="addFavorite()" v-if="!favoriteList.includes(star)" class="h-10 w-10 col-span-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <svg @click="removeFavorite()" v-else-if="favoriteList.includes(star)" class="h-10 w-10 col-span-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <svg class="h-20 w-20 col-span-1" v-if="!selectIcon()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="grey">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg class="h-20 w-20 col-span-1" v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="lightblue">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
          </svg>
        </div>
          <div class="flex items-start justify-between grid grid-cols-2 gap-4">
              <p class="text-xs text-gray-500 p-2">Name : </p>
              <p class="text-lg">{{star.name}}</p>
              <p class="text-xs text-gray-500 p-2">Density :</p>
              <p class="text-lg">{{star.density}}</p>
              <p class="text-xs text-gray-500 p-2">Gravity : </p>
              <p class="text-lg">{{star.gravity}}</p>
              <div v-if="star.moons" class="col-span-2 grid grid-cols-2 gap-4">
                <div class="text-xs p-2">Moons : </div>
                <div class="text-lg">{{star.moons.length}}</div>
                <div v-if="expand">
                  <div v-for="(moon, index) in star.moons" :key="index">
                    {{moon.moon}}
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div class="flex flex-wrap content-center pl-4">
        <NuxtLink class="mr-5 bg-blue-700 text-white border border-blue-700 font-bold py-2 px-6 rounded-lg" :to="`/starPage/${star.id}`">Show star</NuxtLink>
        <button v-if="star.moons" class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border rounded-r-lg border-r-0 border-blue-500 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" @click="expand = !expand">Show moons</button>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
    props: [
        'star'
    ],
    data() {
        return {
          expand: false,
          favoriteList: [],
        }
    },
    methods:{
      addFavorite(){
        try{
          this.$store.commit('favorite/addFavorite', this.star);
          this.favoriteList = this.$store.state.favorite.favoriteList;
          this.$toasted.success('Successfully Added', {}).goAway(1500);
        }catch{
          this.$toasted.error('Failed :/ , try again please !').goAway(1500);
        }
      },
      removeFavorite(){
        try{
          this.$store.commit('favorite/removeFavorite', this.star);
          this.$toasted.success('Successfully Removed', {}).goAway(1500);
        }catch{
          this.$toasted.error('Failed :/ , try again please !').goAway(1500);
        }
      },
      selectIcon(){
        if(this.star.isPlanet){
          return true;
        }else{
          return false;
        }
      }
    },
    computed: {
    },
    created(){
      this.favoriteList = this.$store.state.favorite.favoriteList;
    },
    watch: {
      '$store.state.favorite.favoriteList': function() {
        this.favoriteList = this.$store.state.favorite.favoriteList;
      }
    }


})
</script>
<style>

</style>
