import Vue from 'vue'
import Vuex from 'vuex'
import httpClient from '@/services/HttpClient';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emprendedora: {},
    categories: [],
    sections: [],
  },
  getters: {
    getEmprendedoraName(state) {
      return state.emprendedora.name || "Sin Nombre";
    },
    getEmprendedoraPhone(state) {
      return state.emprendedora.mobilephone || null;
    }
  },
  mutations: {
    setCategories(state, _categories) {
      state.categories = _categories;
    },
    setSections(state, _sections) {
      state.sections = _sections;
    },
    setEmprendedora(state, _emprendedora) {
      state.emprendedora = _emprendedora;
    }
  },
  actions: {
    async getCategories({ commit }) {
      try {
        const response = await httpClient.get('/api/v2/categories');
        commit('setCategories', response.data); 
      } catch (error) {
        console.log(error);
      }
    },
    async getSections({ commit }) {
      try {
        const response = await httpClient.get('/api/v1/categories/sections');
        commit('setSections', response.data); 
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
