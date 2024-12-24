import { defineStore } from 'pinia'

interface FontCombination {
  heading: string
  body: string
}

export const useFontsStore = defineStore('fonts', {
  state: () => ({
    combinations: [
      { heading: 'GFS Didot', body: 'Open Sans' },
      { heading: 'Roboto Slab', body: 'Roboto' },
      { heading: 'Ubuntu', body: 'Ubuntu' },
      { heading: 'Cardo', body: 'Fira Sans' },
      { heading: 'Alegreya', body: 'Noto Sans' },
      { heading: 'GFS Neohellenic', body: 'Noto Serif' },
      { heading: 'Comfortaa', body: 'Open Sans' },
      { heading: 'Play', body: 'Roboto' },
      { heading: 'Advent Pro', body: 'Fira Sans' },
      { heading: 'Didact Gothic', body: 'Ubuntu' }
    ] as FontCombination[]
  }),
  getters: {
    getAllCombinations: (state) => state.combinations
  }
}) 