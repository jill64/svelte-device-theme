import { init } from '@jill64/sentry-sveltekit-cloudflare/client'

const onError = init('')

export const handleError = onError()
