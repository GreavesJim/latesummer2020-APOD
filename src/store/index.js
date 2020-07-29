import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  timeout: 3000,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    space: {},
    mySpace: {},
  },
  mutations: {
    setSpace(state, payload) {
      state.space = payload;
    },
    setMySpace(state, payload) {
      state.mySpace = payload;
    },
  },
  actions: {
    async getSpacePic({ commit, dispatch }) {
      let res = await _api.get(
        "apod?api_key=tOLayWrh0y4rjTrUv2pcv5Jf4FHpgailnOK0bcaz"
      );
      commit("setSpace", res.data);
    },
    async getMySpacePic({ commit, dispatch }, date) {
      let res = await _api.get(
        "apod?api_key=tOLayWrh0y4rjTrUv2pcv5Jf4FHpgailnOK0bcaz&date=" + date
      );
      commit("setMySpace", res.data);
    },
  },
  modules: {},
});
