<template>


  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Adresse
          </th>
          <th class="text-left">
            Taille
          </th>
          <th class="text-left">
            Prix
          </th>
          <th class="text-left">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in $store.state.results"
          :key="item.numero_plan"
        >
          <td>{{item.numero_voie}} {{ item.voie }}</td>
          <td>{{ item.surface_lot_1 }}</td>
          <td>{{ item.valeur_fonciere }}</td>
          <td>{{ item.date_mutation }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
@Component({
  components: {},
})
export default class Home extends Vue {
  tableHeaders= [{text: "Adresse", value: "voie"}, {text: "Prix", value: "valeur_fonciere"}, {text: "Surface", value: "surface_lot_1"}]

  get tableResult() {
    let result = this.$store.state.results.features;
    result = result.map((i:any) => i.properties); 
    return result;
  }
}
</script>
