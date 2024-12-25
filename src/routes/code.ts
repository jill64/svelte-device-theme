export const code = (result: boolean | undefined) =>
  /* html */ `
<script>
  import { is } from 'svelte-device-theme'
</script>

<output>is.dark: ${result}</output>
`.trim()
