import Vue from 'vue';
import Vuex from 'vuex';
import filters from './modules/filters.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { filters }
})