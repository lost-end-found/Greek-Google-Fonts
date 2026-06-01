<script setup lang="ts">
import { useFontsStore } from '~/stores/fonts'

useHead({ title: 'Συνδυασμοί γραμματοσειρών' })

const fontStore = useFontsStore()

const PANGRAM = 'Η γρήγορη καφέ αλεπού πηδάει πάνω από το τεμπέλικο σκυλί.'
const POEM = 'Είναι νωρίς ακόμη μες στον κόσμο αυτόν αγάπη μου.'
const LOREM = 'Λορεμ ιπσουμ δολορ σιτ αμετ, κονσεκτετουρ αδιπισκινγκ ελιτ.'

const samples = [
  { id: 'pangram', label: 'Παροιμία', text: PANGRAM },
  { id: 'poem', label: 'Στίχος', text: POEM },
  { id: 'lorem', label: 'Lorem', text: LOREM }
]

const previewText = ref(PANGRAM)
const largeHeadings = ref(true)
const effectiveText = computed(() => previewText.value.trim() || PANGRAM)
</script>

<template>
  <div class="min-h-screen bg-paper text-ink">
    <!-- Hero -->
    <header class="mx-auto max-w-3xl px-6 pb-12 pt-28 text-center sm:pt-32">
      <p class="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-soft">
        by Larry Ioannidis
      </p>
      <h1 lang="el" class="font-heading text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
        Ελληνικές γραμματοσειρές<br class="hidden sm:block" /> από την Google
      </h1>
      <p lang="el" class="mx-auto mt-6 max-w-xl font-alegreya text-lg leading-relaxed text-stone-600">
        Διαλεγμένοι συνδυασμοί γραμματοσειρών του Google Fonts που υποστηρίζουν
        ελληνικά — γράψτε το δικό σας κείμενο, δείτε το ζωντανά και αντιγράψτε το CSS.
      </p>
      <p class="mx-auto mt-2 max-w-xl text-sm text-soft">
        Hand-picked Greek-capable Google Font pairings, with a live preview and copy-paste CSS.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#pairings"
          class="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper transition hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Δείτε τους συνδυασμούς
        </a>
        <NuxtLink
          to="/gallery"
          class="group inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Συλλογή ποίησης
          <span aria-hidden="true" class="transition group-hover:translate-x-0.5">→</span>
        </NuxtLink>
      </div>
    </header>

    <!-- Sticky live-preview control -->
    <div class="sticky top-16 z-40 border-y border-stone-200/80 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <label for="preview-input" class="shrink-0 text-sm font-medium text-soft">
          Δοκιμαστικό κείμενο
        </label>
        <input
          id="preview-input"
          v-model="previewText"
          type="text"
          lang="el"
          :placeholder="PANGRAM"
          autocomplete="off"
          class="min-w-0 flex-1 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-base text-ink shadow-sm transition focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        <div class="flex flex-wrap items-center gap-2">
          <button
            v-for="s in samples"
            :key="s.id"
            type="button"
            @click="previewText = s.text"
            class="rounded-full border border-stone-300 px-3 py-1.5 text-xs font-medium text-soft transition hover:border-stone-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
          >
            {{ s.label }}
          </button>
          <button
            type="button"
            :aria-pressed="largeHeadings"
            aria-label="Εναλλαγή μεγέθους επικεφαλίδας"
            @click="largeHeadings = !largeHeadings"
            class="rounded-full border border-stone-300 px-3 py-1.5 text-xs font-medium text-soft transition hover:border-stone-400 hover:bg-white aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
          >
            Aa
          </button>
        </div>
      </div>
    </div>

    <!-- Pairings grid -->
    <main>
      <section id="pairings" class="mx-auto max-w-6xl scroll-mt-32 px-6 pb-24 pt-10">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FontPairCard
            v-for="combo in fontStore.getAllCombinations"
            :key="combo.slug"
            :combo="combo"
            :text="effectiveText"
            :large="largeHeadings"
          />
        </div>
      </section>
    </main>
  </div>
</template>
