import { ref } from 'vue'
import type { FontCombination } from '~/stores/fonts'

/** "GFS Didot" -> "GFS+Didot" for a Google Fonts URL. */
function familyToUrlName(name: string): string {
  return name.trim().replace(/\s+/g, '+')
}

/** One @import line per family, Greek + Latin subset. */
function importLine(name: string): string {
  return `@import url('https://fonts.googleapis.com/css?family=${familyToUrlName(name)}&subset=latin,greek');`
}

/**
 * The ready-to-paste CSS for a pairing: a Google Fonts @import per family
 * (de-duped when heading === body) plus the heading/body font-family rules.
 * This snippet is for the visitor's own site; it is intentionally independent
 * of how this site self-hosts the same fonts via @nuxt/fonts.
 */
export function buildCss(combo: FontCombination): string {
  const families = combo.heading === combo.body
    ? [combo.heading]
    : [combo.heading, combo.body]

  const imports = families.map(importLine).join('\n')
  const headingFallback = combo.category === 'serif' ? 'serif' : 'sans-serif'

  return `${imports}

h1, h2, h3 {
  font-family: '${combo.heading}', ${headingFallback};
}

body {
  font-family: '${combo.body}', sans-serif;
}`
}

/**
 * Clipboard helper with a per-pairing "Copied!" confirmation. Falls back to a
 * temporary <textarea> + execCommand for non-secure (plain http) contexts.
 */
export function useCopyCss() {
  const copiedSlug = ref<string | null>(null)
  let timer: ReturnType<typeof setTimeout> | null = null

  async function copy(combo: FontCombination) {
    const css = buildCss(combo)
    try {
      await navigator.clipboard.writeText(css)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = css
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    copiedSlug.value = combo.slug
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => (copiedSlug.value = null), 2000)
  }

  return { copiedSlug, copy }
}
