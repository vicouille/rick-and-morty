import {createStore} from 'vuex'

export default createStore({
    state: {
        characters: [],
        charactersFilter: []
    },
    getters: {},
    mutations: {
        setCharaters(state, payload) {
            state.characters = payload
        },
        setCharactersFilter(state, payload) {
            state.charactersFilter = payload
        }
    },
    actions: {
        getCharacters: async function ({commit}) {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character')
                const data = await response.json()
                commit('setCharaters', data.results);
                commit('setCharactersFilter', data.results);
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        },
        filterByStatus({commit, state}, status) {
          const results = state.characters.filter((character) => {
            return character.status.includes(status)
              })
          commit('setCharactersFilter', results)
        },
        filterByName({commit, state}, name) {
            const formatName = name.toLowerCase()
            const results = state.characters.filter((character) => {
                const characterName = character.name.toLowerCase()

                if (characterName.includes(formatName)) {

                    return character
                }
            })
            commit('setCharactersFilter', results)
        }
    },
    modules: {}
})
