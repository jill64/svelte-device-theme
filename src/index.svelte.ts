import { listen } from 'svelte-mq-store'

export let isDark = listen('(prefers-color-scheme: dark)')
