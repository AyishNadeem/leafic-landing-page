"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export function AndroidWaitlist() {
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setJoined(true)
  }

  if (joined) {
    return (
      <div className="flex items-center justify-center gap-2 border-2 border-foreground bg-secondary px-4 py-3 pixel-shadow-sm">
        <Check className="size-4 shrink-0 text-foreground" aria-hidden />
        <span className="font-pixel text-[9px] uppercase tracking-tight text-foreground">
          You&apos;re on the list
        </span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-stretch">
      <label htmlFor="android-email" className="sr-only">
        Email address for the Android waitlist
      </label>
      <input
        id="android-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full border-2 border-r-0 border-foreground bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <button
        type="submit"
        className="shrink-0 border-2 border-foreground bg-foreground px-4 py-2.5 font-pixel text-[9px] uppercase tracking-tight text-background transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Notify me
      </button>
    </form>
  )
}
