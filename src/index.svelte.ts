import { listen } from 'svelte-mq-store'

let isDark = listen('(prefers-color-scheme: dark)')

export let is = {
  get dark() {
    return isDark
  },
  get light() {
    return !isDark
  }
}
