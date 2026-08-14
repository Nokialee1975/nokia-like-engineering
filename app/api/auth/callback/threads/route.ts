
import { NextRequest } from 'next/server'
export async function GET(req: NextRequest){
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')
  if(error) return new Response(`OAuth error: ${error}`, {status:400})
  if(!code) return new Response('No code', {status:400})

  const clientId = process.env.THREADS_CLIENT_ID!
  const clientSecret = process.env.THREADS_CLIENT_SECRET!
  const redirectUri = process.env.THREADS_REDIRECT_URI!

  // 1. code -> short lived token
  const tokenRes = await fetch('https://graph.threads.net/oauth/access_token', {
    method:'POST',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      code
    })
  })
  const tokenData = await tokenRes.json()
  if(!tokenRes.ok){
    return new Response(`Token exchange failed: ${JSON.stringify(tokenData)}`, {status:500})
  }

  // 2. short -> long lived
  const longRes = await fetch(`https://graph.threads.net/access_token?grant_type=th_exchange_token&client_secret=${clientSecret}&access_token=${tokenData.access_token}`)
  const longData = await longRes.json()

  // 本来はここでDB保存。デモではクッキーに保存せずログだけ
  console.log('LONG TOKEN', longData)

  // 3. 投稿取得テスト
  // const userId = tokenData.user_id
  // const posts = await fetch(`https://graph.threads.net/v1.0/${userId}/threads?fields=id,text,like_count,timestamp&access_token=${longData.access_token}`)

  return Response.redirect(`/dashboard?connected=threads&token_ok=1`)
}
