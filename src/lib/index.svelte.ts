import { listen } from 'svelte-mq-store'

let isDark = $derived(listen('(prefers-color-scheme: dark)'))

export const is = {
  get dark() {
    return isDark.v
  },
  get light() {
    return !isDark.v
  }
}
