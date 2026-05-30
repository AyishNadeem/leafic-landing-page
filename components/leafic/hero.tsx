"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Apple, Smartphone } from "lucide-react"
import { Logo } from "./logo"

const PREVIEW_IMAGES = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"]

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % PREVIEW_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#F9F7F2] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
          <h1 className="mt-8 font-['Fraunces'] text-5xl md:text-6xl text-[#2D4F1E] leading-[1.05]">
            Your plant's new <br/> best friend.
          </h1>
          
          <p className="mt-8 max-w-md text-lg leading-8 text-[#6B7A5E]">
            Leafic helps you care for your plants with confidence. Get instant diagnoses, personalized care plans, and climate-aware advice.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Primary iOS CTA */}
            <a
              href="https://apps.apple.com/app/leafic/id6772236431"
              className="inline-flex items-center justify-center gap-3 bg-[#2D4F1E] px-8 py-4 font-['Press_Start_2P'] text-[9px] text-white shadow-[4px_4px_0px_0px_#E07A5F] transition hover:translate-y-1 hover:shadow-none"
            >
              <Apple className="size-4" /> DOWNLOAD iOS
            </a>

            {/* Android Status Indicator */}
            <div className="inline-flex items-center justify-center gap-3 border-2 border-[#2D4F1E]/20 px-8 py-4 font-['Press_Start_2P'] text-[9px] text-[#2D4F1E]/40">
              <Smartphone className="size-4" /> 
              <span>ANDROID SOON</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E07A5F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E07A5F]"></span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Framed Slideshow (No arrows) */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[570px] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#333] shadow-[8px_8px_0px_0px_#E07A5F] rotate-2 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />
            
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image src={PREVIEW_IMAGES[index]} alt="App preview" fill className="object-cover" priority />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator (Minimalist navigation) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {PREVIEW_IMAGES.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? "bg-white w-4" : "bg-white/40"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}