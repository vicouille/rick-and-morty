import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter:[]
  },
  getters: {
  },
  mutations: {
    setCharaters(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharaters', data.results);
        commit('setCharactersFilter', data.results);
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
