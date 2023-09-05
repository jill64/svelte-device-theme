import { BROWSER } from 'esm-env'
import { readable } from 'svelte/store'

export const isDark = readable<boolean | undefined>(
  BROWSER ? matchMedia('(prefers-color-scheme: dark)').matches : undefined,
  (set) => {
    if (BROWSER) {
      matchMedia('(prefers-color-scheme: dark)').addEventListener(
        'change',
        (e) => set(e.matches)
      )
    }
  }
)
