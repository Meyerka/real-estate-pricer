<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="tableHeaders"
      :items="tableResult"
      :search="search"
    ></v-data-table>
  </v-card>

  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
@Component({
  components: {},
})
export default class Home extends Vue {
  search = '';
  tableHeaders= [{text: "Adresse", value: "address"}, {text: "Prix", value: "price"}, {text: "Surface", value: "surface"}, {text: "Prix/m2", value: "pricePerSqm"}, {text: "Date", value: "date"}]

  get tableResult() {
    let result: any = [];
    for (const item of this.$store.state.results) {
      result.push({
        address: item.numero_voie + ", " + item.type_voie + " " + item.voie,
        price: item.valeur_fonciere,
        surface: item.surface_lot_1 || item.surface_lot_2,
        pricePerSqm: (item.valeur_fonciere / (item.surface_lot_1 || item.surface_lot_2)).toFixed(0),
        date: item.date_mutation,
      });
    }
    
    return result;
  }
}
</script>
