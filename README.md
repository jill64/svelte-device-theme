# svelte-device-theme

[![npm](https://img.shields.io/npm/v/%40jill64%2Fsvelte-device-theme)](https://npmjs.com/package/@jill64/svelte-device-theme)

A simple store that syncs with your device's theme settings

## Install

```sh
npm i -D @jill64/svelte-device-theme
```

## Usage

Note: `$isDark` is `undefined` on the server

```svelte
<script>
  import { isDark } from '@jill64/svelte-device-theme'
</script>

{#if $isDark}
  Device is dark mode
{:else}
  Device is light mode
{/if}
```
