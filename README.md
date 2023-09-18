# svelte-device-theme

![github-actions-ci](https://github.com/jill64/svelte-device-theme/actions/workflows/ci.yml/badge.svg)

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
