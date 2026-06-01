<script setup lang="ts">
const route = useRoute()
const links = [
  { to: '/', label: 'Συνδυασμοί', en: 'Grid' },
  { to: '/gallery', label: 'Συλλογή', en: 'Gallery' }
]
const isActive = (to: string) =>
  to === '/' ? route.path === '/' : route.path.startsWith(to)
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <NuxtLink
        to="/"
        class="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span class="font-heading text-xl tracking-tight text-ink">Greek Google Fonts</span>
      </NuxtLink>

      <div class="flex items-center gap-1 sm:gap-2">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :aria-current="isActive(link.to) ? 'page' : undefined"
          class="relative rounded-md px-3 py-2 text-sm font-medium transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          :class="isActive(link.to)
            ? 'text-ink after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent'
            : 'text-soft'"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
