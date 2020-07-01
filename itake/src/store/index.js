import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from 'firebase';
// Persistencia del estado
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    perrosPorAdoptar: [],
    favoritos: []
  },

  mutations: {

    agregarPerroPorAdoptar(state, perritos) {
      state.favoritos = perritos
    },
    eliminarPerroPorAdoptar(state, newFavoritos) {
      state.favoritos = newFavoritos
    },
    mutandoInfoAdoptantes(state, info) {
      state.infoAdoptantes
    },
    mutandoFavoritos(state, datosFavoritos) {
      state.favoritos = datosFavoritos
    }
    // crear mutacionEliminarPerro(state,perro) -> Filtra la lista perrosPorAdoptar
  },

  actions: {
    agregarPerroPorAdoptar({
      commit,
      state
    }, perro) {
      let perritos = state.favoritos;
      perritos.push(perro)
      let id = perro.id;
      let img = perro.img

      let payload = {
        email: firebase.auth().currentUser.email,
        perritos: {
          perritosFavoritos: perritos
        }
      }
      axios.post('https://us-central1-itake-1436f.cloudfunctions.net/personas/persona', payload).then(data => {
        console.log(data)
        commit('agregarPerroPorAdoptar', perritos)
      })
    },
    eliminarPerroPorAdoptar({
      commit,
      state
    }, perro) {
      let favoritos = state.favoritos;
      let newFavoritos = favoritos.filter(f => f.id !== perro.id)

      console.log(newFavoritos);
      let payload = {
        email: firebase.auth().currentUser.email,
        perritos: {
          perritosFavoritos: newFavoritos
        }
      }
      axios.post('https://us-central1-itake-1436f.cloudfunctions.net/personas/persona', payload).then(data => {
        console.log(data)
        commit("eliminarPerroPorAdoptar", newFavoritos)
      })
    },
    actionFavoritos({
      commit
    }, datosFavoritos) {
      commit("mutandoFavoritos", datosFavoritos)
    }
    // crear eliminarPerroPorAdoptar(context, perro) -> llama mutacion 
  },

  getters: {
    getPerrosPorAdoptar(state) {
      let listaSinPerrosRepetidos = new Set(state.favoritos)
      return [...listaSinPerrosRepetidos]
    },
    perrosAdoptados() {
      let adoptados = this.getPerrosPorAdoptar;
      console.log(adoptados)
    }
  },

  modules: {

  },
  plugins: [createPersistedState()],

});