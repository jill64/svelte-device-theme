import { readable } from 'svelte/store'

export const isDark = readable<boolean | undefined>(
  typeof window !== 'undefined'
    ? matchMedia('(prefers-color-scheme: dark)').matches
    : undefined,
  (set) => {
    if (typeof window !== 'undefined') {
      matchMedia('(prefers-color-scheme: dark)').addEventListener(
        'change',
        (e) => set(e.matches)
      )
    }
  }
)
