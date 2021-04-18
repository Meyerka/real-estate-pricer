<template>
  <v-app>
  
    <v-main>
    <GmapMap
    :center="{lat:48, lng:2}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
/>
      <Home/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './views/Home.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
});
</script>
