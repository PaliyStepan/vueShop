import Vue from 'vue';
import Vuex from 'vuex';

import apiRequest from "./actions/api"
import commonActions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const actions = {...commonActions, ...apiRequest };

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters
});



