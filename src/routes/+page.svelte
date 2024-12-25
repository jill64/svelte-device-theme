<script lang="ts">
  import { is } from '$lib/index.svelte.js'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { code } from './code.js'
</script>

<main>
  <output>
    <HighlightSvelte code={code(is.dark)} />
  </output>
</main>

<style>
  output {
    overflow-x: auto;
  }
</style>
