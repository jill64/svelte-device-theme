<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-device-theme

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-device-theme)](https://npmjs.com/package/@jill64/svelte-device-theme) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-device-theme)](https://npmjs.com/package/@jill64/svelte-device-theme) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-device-theme)](https://npmjs.com/package/@jill64/svelte-device-theme) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-device-theme)](https://npmjs.com/package/@jill64/svelte-device-theme)

☯ A simple store that syncs with your device's theme settings

## Installation

```sh
npm i @jill64/svelte-device-theme
```

<!----- END GHOST DOCS HEADER ----->

## Usage

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

> [!NOTE]  
> `$isDark` is `undefined` on the server.  
> If you need full theme management including SSR, please see [@jill64/svelte-dark-theme](https://github.com/jill64/svelte-dark-theme).
