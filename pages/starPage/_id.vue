<template>
    <div class="w-full max-w-sm bg-white">
      <NuxtLink class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-10 mx-10" to="/" >Go back</NuxtLink >
      <div class="p-3">
          <div class="flex items-start justify-between grid grid-cols-2 gap-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500 p-2">FrenchName :</p>
                  <p class="text-lg">{{star.name}}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500">EnglishName :</p>
                  <p class="text-lg">{{star.englishName}}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500">Density : </p>
                  <p class="text-lg">{{star.density}}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500">Gravity : </p>
                  <p class="text-lg">{{star.gravity}}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500">semimajorAxis : </p>
                  <p class="text-lg">{{star.semimajorAxis}}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500">perihelion : </p>
                  <p class="text-lg">{{star.perihelion}}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500">aphelion : </p>
                  <p class="text-lg">{{star.aphelion}}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500">eccentricity : </p>
                  <p class="text-lg">{{star.eccentricity}}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500">inclination : </p>
                  <p class="text-lg">{{star.inclination}}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 col-span-2">
                  <p class="text-xs text-gray-500">escape : </p>
                  <p class="text-lg">{{star.escape}}</p>
                </div>
              </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">meanRadius : </p>
                <p class="text-lg">{{star.meanRadius}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">equaRadius : </p>
                <p class="text-lg">{{star.equaRadius}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">polarRadius : </p>
                <p class="text-lg">{{star.polarRadius}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">flattening : </p>
                <p class="text-lg">{{star.flattening}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">dimension : </p>
                <p class="text-lg">{{star.dimension}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">sideralOrbit : </p>
                <p class="text-lg">{{star.sideralOrbit}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">sideralRotation : </p>
                <p class="text-lg"> {{star.sideralRotation}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">discoveredBy : </p>
                <p class="text-lg">{{star.discoveredBy}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">discoveryDate : </p>
                <p class="text-lg">{{star.discoveryDate}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">alternativeName : </p>
                <p class="text-lg">{{star.alternativeName}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">axialTilt :</p>
                <p class="text-lg">{{star.axialTilt}}</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">Mass : </p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">massExponent</p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">Vol : </p>
              </div>
              <div class="grid grid-cols-2 gap-4 col-span-2">
                <p class="text-xs text-gray-500">VolExponent</p>
              </div>
            </div>

              <div v-if="star.moons" class="col-span-2 grid grid-cols-2 gap-4">
              
                Moons : {{star.moons.length}}
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
        star: [],
        expand: false,
      }
  },
  async created(){
    this.star = await this.$store.dispatch("star/getStar", {id: this.$route.params.id})
  },
})
</script>
<style>

</style>
