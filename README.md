<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-device-theme

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/@jill64/svelte-device-theme"><img src="https://img.shields.io/npm/v/@jill64/svelte-device-theme" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-device-theme"><img src="https://img.shields.io/npm/l/@jill64/svelte-device-theme" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-device-theme"><img src="https://img.shields.io/npm/dm/@jill64/svelte-device-theme" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-device-theme"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-device-theme" alt="npm-min-size" /></a><!----- END GHOST DOCS BADGES ----->

☯ A simple store that syncs with your device's theme settings

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

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
