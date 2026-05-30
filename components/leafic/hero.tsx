"use client"

import { Apple } from "lucide-react"
import { AndroidWaitlist } from "./android-waitlist"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9F7F2] py-24 md:py-32 border-b border-[#2D4F1E]/10">
      {/* Decorative spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E07A5F]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-6 text-center">
        
        

        <h1 className="font-['Fraunces'] text-5xl md:text-7xl text-[#2D4F1E] leading-[1.1] mb-8">
          Your plant’s new <br/> best friend.
        </h1>

        <p className="max-w-lg font-['Inter'] text-lg text-[#6B7A5E] leading-relaxed">
          Leafic identifies plants, diagnoses health, and tracks your garden's growth. 
          No accounts, no ads, and no data tracking. Just honest care.
        </p>

        {/* Primary CTA */}
        <a
          href="#download"
          className="mt-12 inline-flex items-center gap-3 bg-[#2D4F1E] px-8 py-4 font-['Press_Start_2P'] text-[9px] text-white shadow-[4px_4px_0px_0px_#E07A5F] transition-all hover:translate-y-1 hover:shadow-none"
        >
          <Apple className="size-4" />
          <span>DOWNLOAD ON iOS</span>
        </a>

        {/* Android Waitlist */}
        <div className="mt-20 w-full max-w-sm pt-8 border-t border-[#2D4F1E]/10">
          <p className="mb-4 font-['Press_Start_2P'] text-[7px] uppercase tracking-widest text-[#2D4F1E]/40">
            Android version in development
          </p>
          <AndroidWaitlist />
        </div>
      </div>
    </section>
  )
}