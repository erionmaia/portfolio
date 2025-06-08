import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import { Router } from 'itty-router'

const router = Router()

// Handle all routes
router.all('*', async (request: Request, env: any, ctx: ExecutionContext) => {
  try {
    // Try to serve the asset from KV
    return await getAssetFromKV({
      request,
      waitUntil: ctx.waitUntil.bind(ctx),
    })
  } catch (e) {
    // If the asset is not found, serve index.html for client-side routing
    return await getAssetFromKV({
      request: new Request(new URL('/index.html', request.url)),
      waitUntil: ctx.waitUntil.bind(ctx),
    })
  }
})

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    return router.handle(request, env, ctx)
  },
} 