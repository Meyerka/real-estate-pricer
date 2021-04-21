import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		search: { lng: 2.3522219, lat: 48.856614, dist: 100 },
		results: {}
	},
	mutations: {
		setSearch: (state, place) => (state.search = place),
		setResults: (state, results) => (state.results = results)
	},
	actions: {
		async fetchResultsFromLocation({ commit }, search) {
			axios
				.get(`http://api.cquest.org/dvf?lat=${search.lat}&lon=${search.lng}&dist=${search.dist}`)
				.then((response) => {
          let result = response.data.features.map((i: any) => i.properties);
          console.log(result);
          result = result.filter((r: any) => r.valeur_fonciere && r.surface_lot_1);
          console.log(result);
					
          commit('setResults', result);
				});
		}
	},
	modules: {}
});
