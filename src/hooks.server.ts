import { hooks } from '@jill64/npm-demo-layout'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init('')

export const handle = onHandle(hooks)
export const handleError = onError()
