<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/svelte-device-theme


<!----- BEGIN GHOST DOCS BADGES ----->
<a href="https://npmjs.com/package/@jill64/svelte-device-theme"><img src="https://img.shields.io/npm/v/@jill64/svelte-device-theme" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-device-theme"><img src="https://img.shields.io/npm/l/@jill64/svelte-device-theme" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-device-theme"><img src="https://img.shields.io/npm/dm/@jill64/svelte-device-theme" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-device-theme"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-device-theme" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-device-theme/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-device-theme/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://svelte-device-theme.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-device-theme.jill64.dev" alt="website" /></a>
<!----- END GHOST DOCS BADGES ----->


☯ A simple store that syncs with your device's theme settings

## [Demo](https://svelte-device-theme.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

## [Demo](https://svelte-device-theme.jill64.dev)

## Usage

```svelte
<script>
  import { is } from '@jill64/svelte-device-theme'
</script>

{#if is.dark}
  Device is dark mode
{:else}
  Device is light mode
{/if}
```

> [!NOTE]  
> `$isDark` is `undefined` on the server.  
> If you need full theme management including SSR, please see [@jill64/svelte-dark-theme](https://github.com/jill64/svelte-dark-theme).

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
