<template>
  <v-app>
    <v-main>
      <gmap-place-input default-place="Singapore" @place_changed="updatePlace">
    </gmap-place-input>
    {{place && place.lat}}, {{place && place.lng}},
      <!-- <GmapMap
        :center="{ lat: 48, lng: 2 }"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GmapMap> -->
      <Home />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./views/Home.vue";

export default Vue.extend({
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    place: {},
    center: {
      lat: 10.0,
      lng: 10.0,
    },
    markers: [
      {
        position: {
          lat: 10.0,
          lng: 10.0,
        },
      },
      {
        position: {
          lat: 11.0,
          lng: 11.0,
        },
      },
    ],
  }),
  methods: {
          updatePlace(what: any) {
            console.log(what)
            console.log("hfm")

            this.place = {
              lat: what.geometry.location.lat(),
              lng: what.geometry.location.lng()
            };
          }
  }
});
</script>
