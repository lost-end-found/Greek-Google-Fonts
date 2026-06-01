<script setup lang="ts">
import type { FontCombination } from '~/stores/fonts'

const props = defineProps<{
  combo: FontCombination
  text: string
  large: boolean
}>()

const headingFallback = computed(() => (props.combo.category === 'serif' ? 'serif' : 'sans-serif'))
const headingFamily = computed(() => `'${props.combo.heading}', ${headingFallback.value}`)
const bodyFamily = computed(() => `'${props.combo.body}', sans-serif`)
</script>

<template>
  <article
    class="group relative flex flex-col rounded-card border border-stone-200/80 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-stone-300 hover:shadow-card-hover focus-within:-translate-y-1 focus-within:shadow-card-hover motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
  >
    <!-- meta row -->
    <div class="mb-5 flex items-center justify-between gap-3">
      <span class="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-soft">
        {{ combo.category }}
      </span>
      <CopyCssButton :combo="combo" />
    </div>

    <!-- heading specimen -->
    <h2
      lang="el"
      :style="{ fontFamily: headingFamily }"
      :class="large ? 'text-4xl sm:text-[2.75rem]' : 'text-3xl'"
      class="break-words leading-tight text-ink"
    >
      {{ text }}
    </h2>

    <!-- body specimen -->
    <p
      lang="el"
      :style="{ fontFamily: bodyFamily }"
      class="mt-4 flex-1 break-words text-base leading-relaxed text-stone-600"
    >
      {{ text }}
    </p>

    <!-- editorial note -->
    <p v-if="combo.note" lang="el" class="mt-5 text-sm italic leading-snug text-soft/90">
      {{ combo.note }}
    </p>

    <!-- labels (names appear once, here) -->
    <dl class="mt-5 flex flex-wrap gap-x-6 gap-y-1 border-t border-stone-100 pt-4 text-sm">
      <div class="flex items-baseline gap-1.5">
        <dt class="text-stone-400">Heading</dt>
        <dd class="font-medium text-stone-700">{{ combo.heading }}</dd>
      </div>
      <div class="flex items-baseline gap-1.5">
        <dt class="text-stone-400">Body</dt>
        <dd class="font-medium text-stone-700">{{ combo.body }}</dd>
      </div>
    </dl>
  </article>
</template>
