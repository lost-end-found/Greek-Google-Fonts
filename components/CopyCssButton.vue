<script setup lang="ts">
import type { FontCombination } from '~/stores/fonts'

const props = defineProps<{ combo: FontCombination }>()

const { copiedSlug, copy } = useCopyCss()
const isCopied = computed(() => copiedSlug.value === props.combo.slug)
</script>

<template>
  <button
    type="button"
    @click="copy(combo)"
    :aria-label="`Αντιγραφή CSS για ${combo.heading} και ${combo.body}`"
    class="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
    :class="isCopied
      ? 'border-accent/30 bg-accent/10 text-accent'
      : 'border-stone-200 text-soft hover:border-stone-300 hover:bg-stone-50'"
  >
    <span aria-hidden="true">{{ isCopied ? '✓' : '⧉' }}</span>
    <span aria-live="polite">{{ isCopied ? 'Αντιγράφηκε!' : 'Copy CSS' }}</span>
  </button>
</template>
