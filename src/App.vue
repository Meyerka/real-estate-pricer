<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
      <gmap-place-input default-place="Paris" @place_changed="updatePlace">
      </gmap-place-input>
      {{ place && place.lat }}, {{ place && place.lng }}
      </v-row>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col>
      <GmapMap
        :center="place"
        :zoom="15"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GmapMarker
          :position="place"
          :clickable="true"
          :draggable="true"
          @click="center = place"
        />
      </GmapMap>
      </v-col>
      </v-row>
      <Home />
    </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./views/Home.vue";
@Component({
  components: { Home },
})
export default class App extends Vue {
  place = {lng: 2.3522219, lat: 48.856614};

  updatePlace(what: any) {
    this.place = {
      lat: what.geometry.location.lat(),
      lng: what.geometry.location.lng(),
    };
  }
}
</script>
