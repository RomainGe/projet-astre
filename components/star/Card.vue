<template>
    <div class="w-full max-w-sm overflow-hidden rounded border bg-white shadow">
      <div class="p-3">
          <div class="flex items-start justify-between">
              <p class="text-xs text-gray-500">{{star.name}}</p>
              <p class="text-xs text-gray-500">{{star.density}}</p>
              <p class="text-xs text-gray-500">{{star.density}}</p>
              <div v-if="star.moons">
                Moons : {{star.moons.length}}
                <div v-for="(moon, index) in star.moons" :key="index">
                    {{moon.moon}}
                </div>
              </div>
          </div>
      </div>
      <div class="flex flex-wrap content-center">
        <button class="mr-5 bg-blue-700 text-white border border-blue-700 font-bold py-2 px-6 rounded-lg" @click="showDetails()">
          Show star
        </button>
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

        }
    },
    methods:{
      showDetails(){
        this.$router.push({name: 'starPage', params: {star: this.star}})
      }
    }


})
</script>
<style>

</style>
