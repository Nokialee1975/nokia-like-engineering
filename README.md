
# nokia-like-engineering - Threads OAuth starter

0から始める手順:
1. このリポジトリをFork
2. Vercelで Import Project
3. developers.facebook.com でアプリ作成 → Threads API追加
4. Vercelの Environment Variablesに3つ設定:
   - THREADS_CLIENT_ID
   - THREADS_CLIENT_SECRET
   - THREADS_REDIRECT_URI = https://あなたのvercel.app/api/auth/callback/threads
5. Redeploy → /api/auth/threads にアクセスしてテスト

開発モードでは自分のアカウントのみ取得可能。審査不要でテストできます。
