
import { NextRequest } from 'next/server'
export async function GET(req: NextRequest){
  const clientId = process.env.THREADS_CLIENT_ID
  const redirectUri = process.env.THREADS_REDIRECT_URI
  if(!clientId || !redirectUri){
    return new Response('Env not set: THREADS_CLIENT_ID, THREADS_REDIRECT_URI', {status:500})
  }
  const scope = 'threads_basic,threads_manage_insights'
  const state = Math.random().toString(36).slice(2)
  const url = `https://www.threads.net/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&response_type=code&state=${state}`
  return Response.redirect(url)
}
