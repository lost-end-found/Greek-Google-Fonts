import { defineStore } from 'pinia'

export interface FontCombination {
  /** Display name of the heading font (also a Google Fonts family name). */
  heading: string
  /** Display name of the body font. */
  body: string
  /** Primary classification of the pairing — drives the tag + CSS fallback. */
  category: 'serif' | 'sans' | 'display'
  /** Stable id for v-for keys and copy-confirmation scoping. */
  slug: string
  /** Optional one-line editorial note (Greek). */
  note?: string
}

export const useFontsStore = defineStore('fonts', {
  state: () => ({
    combinations: [
      { slug: 'gfs-didot-open-sans', heading: 'GFS Didot', body: 'Open Sans', category: 'serif', note: 'Νεοκλασική κομψότητα με καθαρή, ουδέτερη ανάγνωση.' },
      { slug: 'roboto-slab-roboto', heading: 'Roboto Slab', body: 'Roboto', category: 'serif', note: 'Σύγχρονο και σταθερό — ιδανικό για μεγάλα κείμενα.' },
      { slug: 'ubuntu', heading: 'Ubuntu', body: 'Ubuntu', category: 'sans', note: 'Ζεστό και ανθρώπινο· μία οικογένεια για τα πάντα.' },
      { slug: 'cardo-fira-sans', heading: 'Cardo', body: 'Fira Sans', category: 'serif', note: 'Λόγια σοβαρότητα με τεχνολογική καθαρότητα.' },
      { slug: 'alegreya-noto-sans', heading: 'Alegreya', body: 'Noto Sans', category: 'serif', note: 'Φτιαγμένη για λογοτεχνία, με ουδέτερο σώμα.' },
      { slug: 'neohellenic-noto-serif', heading: 'GFS Neohellenic', body: 'Noto Serif', category: 'sans', note: 'Ελληνική παράδοση συναντά εκδοτική σοβαρότητα.' },
      { slug: 'comfortaa-open-sans', heading: 'Comfortaa', body: 'Open Sans', category: 'display', note: 'Στρογγυλεμένο, φιλικό και μοντέρνο.' },
      { slug: 'play-roboto', heading: 'Play', body: 'Roboto', category: 'sans', note: 'Γεωμετρικό και τεχνολογικό, με καθαρές γραμμές.' },
      { slug: 'advent-pro-fira-sans', heading: 'Advent Pro', body: 'Fira Sans', category: 'display', note: 'Λεπτό και αρχιτεκτονικό για εντυπωσιακούς τίτλους.' },
      { slug: 'didact-gothic-ubuntu', heading: 'Didact Gothic', body: 'Ubuntu', category: 'sans', note: 'Απλό, διδακτικό και πεντακάθαρο.' }
    ] as FontCombination[]
  }),
  getters: {
    getAllCombinations: (state) => state.combinations
  }
})
