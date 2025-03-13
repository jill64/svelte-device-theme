import { svelteTsConfig } from '@jill64/eslint-config-svelte'

/** @type {import('@jill64/eslint-config-ts').FlatConfig[]} */
export default svelteTsConfig({
  ignores: ['.svelte-kit', '**/*.svelte.ts']
})
