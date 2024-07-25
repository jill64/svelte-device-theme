import { listen } from 'svelte-mq-store'

let isDark = listen('(prefers-color-scheme: dark)')

export let is = {
  get dark() {
    return isDark.value
  },
  get light() {
    return isDark.value === undefined ? undefined : !isDark.value
  }
}
