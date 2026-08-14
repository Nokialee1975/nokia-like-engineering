
'use client'
import { useState } from 'react'
export default function Home(){
  const [handle, setHandle] = useState('@nokia_lee_')
  return (
    <main className="min-h-screen max-w-[640px] mx-auto p-6">
      <h1 className="text-3xl font-black mt-10">ノキア流いいねエンジニアリング</h1>
      <p className="mt-2 text-gray-600">いいねは偶然じゃない。設計できる。</p>
      <div className="mt-8 bg-white rounded-2xl p-5 shadow-sm border">
        <p className="text-sm font-bold">Step1: アカウント入力</p>
        <input value={handle} onChange={e=>setHandle(e.target.value)} className="mt-3 w-full border rounded-full px-4 py-3 text-lg" placeholder="@nokia_lee_" />
        <div className="flex gap-2 mt-3">
          {['@nokia_lee_','@pistachisaurusband','@noki_eri'].map(h=>(
            <button key={h} onClick={()=>setHandle(h)} className="text-xs bg-black text-white rounded-full px-3 py-1">{h}</button>
          ))}
        </div>
      </div>
      <div className="mt-4 bg-white rounded-2xl p-5 shadow-sm border">
        <p className="text-sm font-bold">Step2: 連携して過去投稿を取得</p>
        <a href="/api/auth/threads" className="mt-3 block w-full bg-black text-white text-center rounded-full py-3 font-bold">Threadsでログイン</a>
        <a href="/api/auth/instagram" className="mt-2 block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center rounded-full py-3 font-bold">Instagramでログイン</a>
        <p className="text-[11px] text-gray-500 mt-3">※開発モードでは自分のアカウントのみ取得可能です。まずは @nokia_lee_ でテストしてください。</p>
      </div>
      <div className="mt-6 bg-[#D4FF32] rounded-2xl p-5">
        <p className="font-bold">このテンプレートに含まれるもの</p>
        <ul className="text-sm mt-2 list-disc pl-5 space-y-1">
          <li>/api/auth/threads - 認可URLへリダイレクト</li>
          <li>/api/auth/callback/threads - code→token交換</li>
          <li>/api/posts - 投稿取得サンプル</li>
        </ul>
      </div>
    </main>
  )
}
