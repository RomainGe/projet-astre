<template>
    <div class="w-full max-w-sm overflow-hidden rounded border bg-white shadow">
        <div class="p-3">
            <div class="flex items-start justify-between">
                <p class="text-xs text-gray-500">{{star.name}}</p>
                <p class="text-xs text-gray-500">Density : {{star.density}}</p>
                <p class="text-xs text-gray-500">Gravity : {{star.gravity}}</p>
                <div v-if="star.moons">
                  Moons : {{star.moons.length}}
                  <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" @click="expand = !expand">Show moons</button>
                  <div v-if="expand">
                    <div v-for="(moon, index) in star.moons" :key="index">
                      {{moon.moon}}
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  layout: 'error',
  props: [
  ],
  data() {
      return {
        star: null,
        expand: false,
      }
  },
  created() {
    if(this.$route.params.star ){
      this.star = this.$route.params.star as any;
    }
  },


})
</script>
<style>

</style>
