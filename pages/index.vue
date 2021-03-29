<template>
    <div>
        <div class="flex justify-center rounded-lg text-lg" role="group">
          <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" @click="filterList('all')">All</button>
          <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline" @click="filterList('planet')">Planet</button>
          <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" @click="filterList('moons')">Moons</button>
        </div>
        <div class="grid grid-cols-3 gap-4">
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
          // Create a model for a star avoid this warning
          this.starList = this.$store.state.star.starList.filter((star: { isPlanet: boolean; }) => star.isPlanet == true );
        }else if(filter == 'all'){
          // Create a model for a star avoid this warning
          this.starList = this.$store.state.star.starList;
        }else if(filter == 'moons'){
          this.starList = this.$store.state.star.starList.filter((star: { moons: []; }) => star.moons != null );
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
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
