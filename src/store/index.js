import Vue from 'vue';
import Vuex from 'vuex';
import State from './state';
import Getters from './getters';
import Actions from './actions';
import Mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  State,
  Getters,
  Mutations,
  Actions
});
