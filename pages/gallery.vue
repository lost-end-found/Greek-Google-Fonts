<script setup lang="ts">
import { poems } from '~/data/poems'

useHead({ title: 'Συλλογή ποίησης' })

const sections = [
  ...poems.map((p) => ({ id: p.id, label: p.title ?? p.id })),
  { id: 'about', label: 'Σχετικά' }
]
const activeId = ref(sections[0].id)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeId.value = (entry.target as HTMLElement).id
      }
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  )
  document.querySelectorAll('[data-gallery-section]').forEach((el) => observer?.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="gallery-root">
    <h1 class="sr-only">Ελληνικές γραμματοσειρές από την Google — μια ποιητική συλλογή</h1>

    <nav class="section-nav" aria-label="Ενότητες">
      <ul>
        <li v-for="s in sections" :key="s.id">
          <a
            :href="`#${s.id}`"
            :aria-label="s.label"
            :aria-current="activeId === s.id ? 'true' : undefined"
          >
            <span class="dot" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>

    <main class="gallery">
      <article
        v-for="poem in poems"
        :id="poem.id"
        :key="poem.id"
        data-gallery-section
        class="poem"
        :class="[poem.photoClass, `tone-${poem.textTone}`]"
        :lang="poem.lang"
      >
        <div class="poem__scrim" aria-hidden="true" />
        <div class="poem__content">
          <template v-if="poem.kind === 'intro'">
            <h2 :class="poem.fontHeading" class="poem__title">{{ poem.title }}</h2>
            <p
              v-for="(para, i) in poem.intro"
              :key="i"
              :class="poem.fontBody"
              class="poem__prose"
            >
              {{ para }}
            </p>
            <p :class="poem.fontBody" class="poem__enjoy">Enjoy</p>
          </template>

          <template v-else>
            <h2 :class="poem.fontHeading" class="poem__title">{{ poem.title }}</h2>
            <p v-if="poem.subtitle" :class="poem.fontHeading" class="poem__subtitle">
              {{ poem.subtitle }}
            </p>
            <p v-if="poem.author" :class="poem.authorFont ?? poem.fontBody" class="poem__author">
              {{ poem.author }}
            </p>
            <p :class="poem.fontBody" class="poem__body">
              <template v-for="(line, i) in poem.lines" :key="i">{{ line }}<br></template>
            </p>
          </template>
        </div>

        <div class="poem__attribution">
          <a
            v-for="font in poem.attribution"
            :key="font.name"
            :href="font.href"
            target="_blank"
            rel="noopener"
          >{{ font.name }}</a>
        </div>
      </article>

      <footer id="about" data-gallery-section class="poem sunset tone-light" lang="en">
        <div class="poem__scrim" aria-hidden="true" />
        <div class="poem__content poem__about">
          <img src="/img/me-2.png" alt="Larry Ioannidis" class="poem__avatar">
          <p class="roboto-slab poem__body">
            This project was made by Larry Ioannidis.<br>
            Check out my
            <a class="poem__link" href="https://withlarry.com" target="_blank" rel="noopener">website</a>,
            add me on
            <a class="poem__link" href="https://www.facebook.com/larry.ioannidis" target="_blank" rel="noopener">Facebook</a>
            or
            <a class="poem__link" href="https://gr.linkedin.com/in/larryioannidis" target="_blank" rel="noopener">LinkedIn</a>.
          </p>
          <p class="roboto-slab poem__about-cta">
            Έχετε έναν συνδυασμό Ελληνικών Google Fonts που θα έδειχνε υπέροχος σε ένα site;
            Στείλτε μου
            <a class="poem__link" href="mailto:ilarion.ioannidis@gmail.com">email</a>.
          </p>
        </div>
      </footer>
    </main>
  </div>
</template>

<style scoped>
.gallery-root {
  background: #05080c;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.gallery {
  scroll-snap-type: y proximity;
}

.poem {
  position: relative;
  min-height: 100svh;
  display: grid;
  place-items: center;
  scroll-snap-align: start;
  background-size: cover;
  background-position: center;
  overflow: clip;
  padding: 6rem 1.5rem;
  box-sizing: border-box;
}

@media (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .poem {
    background-attachment: fixed;
  }
}

.poem__scrim {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.tone-light {
  color: #fff;
  text-shadow: 0 1px 24px rgba(0, 0, 0, 0.45);
}
.tone-light .poem__scrim {
  background:
    radial-gradient(ellipse at center, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.58) 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5));
}
.tone-dark {
  color: #08233c;
}
.tone-dark .poem__scrim {
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8));
}

.poem__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: var(--gf-read-width, 65ch);
  margin-inline: auto;
}

.poem__title {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 700;
  margin: 0 0 0.6em;
}
.poem__subtitle {
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-style: italic;
  opacity: 0.85;
  margin: -0.3em 0 1.2em;
}
.poem__author {
  font-size: clamp(1rem, 2vw, 1.25rem);
  letter-spacing: 0.04em;
  opacity: 0.9;
  margin: 0 0 1.4em;
}
.poem__body {
  font-size: clamp(1.05rem, 2.2vw, 1.45rem);
  line-height: 1.65;
  font-weight: 300;
  margin: 0;
}
.poem__prose {
  font-size: clamp(1.05rem, 2.1vw, 1.4rem);
  line-height: 1.7;
  font-weight: 300;
  margin: 0 0 1em;
}
.poem__enjoy {
  font-size: clamp(1.4rem, 3vw, 2rem);
  margin-top: 0.6em;
}

.poem__attribution {
  position: absolute;
  bottom: clamp(1rem, 3vh, 2rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  font: 500 0.82rem/1 'Alegreya', serif;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.34);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  color: #fff;
  max-width: calc(100% - 2rem);
  text-shadow: none;
}
.tone-dark .poem__attribution {
  background: rgba(255, 255, 255, 0.62);
  color: #08233c;
}
.poem__attribution a {
  color: inherit;
  text-decoration: none;
  opacity: 0.85;
}
.poem__attribution a:hover,
.poem__attribution a:focus-visible {
  opacity: 1;
  text-decoration: underline;
}

.poem__about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}
.poem__avatar {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 999px;
}
.poem__link {
  color: inherit;
  text-decoration: underline;
}
.poem__about-cta {
  font-size: 1rem;
  opacity: 0.92;
}

.section-nav {
  position: fixed;
  right: clamp(0.5rem, 2vw, 1.5rem);
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
}
.section-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}
.section-nav a {
  display: block;
  padding: 4px;
}
.section-nav .dot {
  display: block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  transition: transform 0.15s, background 0.15s;
}
.section-nav a:hover .dot {
  transform: scale(1.5);
  background: #fff;
}
.section-nav a:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
  border-radius: 50%;
}
.section-nav a[aria-current='true'] .dot {
  background: #fff;
  transform: scale(1.5);
}

@media (max-width: 640px) {
  .section-nav {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery {
    scroll-snap-type: none;
  }
  .poem {
    background-attachment: scroll;
  }
}
</style>
