import { hooks } from '@jill64/npm-demo-layout'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://10d3a77f997d215e6f6046db497a3cab@o4505814639312896.ingest.us.sentry.io/4508530080284672'
)

export const handle = onHandle(hooks)
export const handleError = onError()
