'use client'

import { useState } from 'react'
import Home from './page'

export default function RootLayout({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const correctPassword = '22114251'

  const handleUnlock = () => {
    if (password === correctPassword) {
      setIsUnlocked(true)
      setError('')
    } else {
      setError('❤️ Wrong password, try again!')
      setPassword('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUnlock()
    }
  }

  if (!isUnlocked) {
    return (
      <html lang="en">
        <body>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 p-4">
            <div className="w-full max-w-md">
              <div className="rounded-[3rem] border-2 border-rose-200 bg-white/80 backdrop-blur-sm shadow-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">💕</div>
                  <h1 className="font-serif text-3xl md:text-4xl text-rose-700 mb-2">
                    Yash & Vandana
                  </h1>
                  <p className="text-rose-500 text-sm font-medium tracking-widest">
                    ANNIVERSARY SPECIAL
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-center text-slate-600 mb-4 font-medium">
                      Enter the password to unlock our anniversary surprise 🎁
                    </p>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-rose-200 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-100 text-center text-lg tracking-widest"
                    />
                  </div>

                  {error && (
                    <div className="text-center text-rose-600 font-medium text-sm animate-bounce">
                      {error}
                    </div>
                  )}

                  <button
                    onClick={handleUnlock}
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 rounded-2xl transition transform hover:scale-105 active:scale-95 shadow-lg"
                  >
                    Unlock ✨
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    11 October - Our Special Day
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center text-slate-600 text-sm">
                <p>🌹 A romantic surprise awaits... 🌹</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yash & Vandana | Anniversary</title>
        <meta name="description" content="A romantic anniversary celebration for Yash and Vandana." />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
