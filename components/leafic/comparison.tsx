"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "./logo"

const SLIDES = [
  { label: "Price", us: "Free, always", them: "$8.99 / month" },
  { label: "Your notes", us: "Stay on your phone", them: "Sent off somewhere" },
  { label: "Ads", us: "None", them: "Yes, between waterings" },
  { label: "Sign-up", us: "Not required", them: "Account needed" },
  { label: "Tone", us: "Calm & kind", them: "Pushy notifications" },
]

export function Comparison() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="compare" className="bg-[#F9F7F2] py-24 border-y-2 border-[#2D4F1E]">
      <div className="mx-auto max-w-lg px-4 text-center">
        <span className="font-['Press_Start_2P'] text-[8px] uppercase tracking-widest text-[#2D4F1E]/60">
          No shade — just honest comparison
        </span>
        <h2 className="mt-4 font-['Fraunces'] text-4xl text-[#2D4F1E]">
          A simpler deal.
        </h2>

        {/* 2x2 Grid with Auto-transition */}
        <div className="mt-12 grid grid-cols-2 gap-4 h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={SLIDES[index].label + "us"}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-[#2D4F1E] p-6 border-2 border-[#2D4F1E] shadow-[4px_4px_0px_0px_#2D4F1E] flex flex-col items-center justify-center text-center"
            >
              <Logo height={16} className="invert mb-3" />
              <div className="font-['Inter'] text-sm font-bold text-white uppercase tracking-wide">{SLIDES[index].label}</div>
              <div className="font-['Inter'] text-sm font-bold text-[#E07A5F] mt-1">{SLIDES[index].us}</div>
            </motion.div>

            <motion.div
              key={SLIDES[index].label + "them"}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="bg-white p-6 border-2 border-[#2D4F1E] shadow-[4px_4px_0px_0px_#2D4F1E] flex flex-col items-center justify-center text-center"
            >
              <div className="font-['Press_Start_2P'] text-[8px] uppercase mb-3 text-[#2D4F1E]/50">Others</div>
              <div className="font-['Inter'] text-sm font-medium text-[#2D4F1E]/50">{SLIDES[index].label}</div>
              <div className="font-['Inter'] text-sm font-medium text-[#2D4F1E]/70 mt-1">{SLIDES[index].them}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 w-8 transition-colors ${i === index ? 'bg-[#2D4F1E]' : 'bg-[#2D4F1E]/20'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}