import Vue from 'vue'
import Vuex from 'vuex'
import apiUsers from "../api/users";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 100,
    listaUsuarios: null,
    usuariosPorPagina: null,
    usuariosTotal: null,
  },
  getters: {
    getListaUsuarios: (state) => state.listaUsuarios,
    getUsuariosPorPagina: (state) => state.usuariosPorPagina,
    getUsuariosTotal: (state) => state.usuariosTotal,
  },
  actions: {
    async getUsers({commit}) {

      try {
        const response = await apiUsers.getUsers();
        
        commit('setusuariosPorPagina', response.data.data);
        commit('setlistaUsuarios', response.data.per_page);
        commit('setusuariosTotal', response.data.total);    

      } catch (error) {
        alert("Erro na requisição");
      }
    },
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setusuariosPorPagina  (state, payload) {
      state.listaUsuarios = payload;
    },
    setlistaUsuarios  (state, payload) {
      state.usuariosPorPagina = payload;
    },
    setusuariosTotal (state, payload) {
      state.usuariosTotal = payload;
    },
  },
})

export default store;