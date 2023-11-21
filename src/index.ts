import { listen } from 'svelte-mq-store'

export const isDark = listen('(prefers-color-scheme: dark)')
