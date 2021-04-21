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
import { Component, Vue } from "vue-property-decorator";
import Home from "./views/Home.vue";
@Component({
  components: {Home},
})
export default class App extends Vue {
    place = {};

          updatePlace(what: any) {
            this.place = {
              lat: what.geometry.location.lat(),
              lng: what.geometry.location.lng()
            };
          }
}
</script>
