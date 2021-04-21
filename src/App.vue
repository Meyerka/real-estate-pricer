<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols ="6">
          <div class="form__group field">
            <gmap-autocomplete
              class="form__field"
              name="name"
              id="name"
              default-place="Paris"
              @place_changed="updatePlace"
            >
            </gmap-autocomplete>
            <label for="name" class="form__label">Adresse</label>
          </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <GmapMap
              :center="place"
              :zoom="15"
              map-type-id="terrain"
              style="width: 100%; height: 300px"
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
  place = { lng: 2.3522219, lat: 48.856614, dist: 100 };

  async updatePlace(what: any) {
    this.place = {
      lat: what.geometry.location.lat(),
      lng: what.geometry.location.lng(),
      dist: 100,
    };
    this.$store.commit("setSearch", this.place);
    await this.$store.dispatch("fetchResultsFromLocation", this.place);
  }
}
</script>
<style lang="scss">
$primary: #314247;
$secondary: #647973;
$white: #fff;
$gray: #6b7b8c;


.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  display: block;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $primary;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
  width: 100%;
  display: block;
}

.form__field:focus {
  ~ .form__label {
    position: relative;
    top: 0;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
    width: 100%;
    display: block;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
  width: 100%;
    display: block;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
  width: 100%;
    display: block;
}
</style>