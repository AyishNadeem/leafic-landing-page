"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const DATA = [
  { label: "Pricing", us: "It's free for everyone, forever.", them: "Locked behind monthly subscriptions." },
  { label: "Storage", us: "Your data stays on your phone.", them: "Data is synced to cloud servers." },
  { label: "Privacy", us: "We don't track your activity.", them: "Data is shared with ad partners." },
  { label: "Accounts", us: "No account is ever required.", them: "Mandatory sign-up to start." },
  { label: "AI Usage", us: "Your photos are never used to train AI.", them: "Your images train their models." },
  { label: "Experience", us: "We only remind you once a week.", them: "They bug you with daily notifications." },
]

export function Comparison() {
  const [isLeaficOn, setIsLeaficOn] = useState(false)

  return (
    <section className="py-24 bg-[#F9F7F2] border-y-2 border-[#2D4F1E] overflow-hidden">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-['Fraunces'] text-4xl text-[#2D4F1E] mb-12">
          Compare us to the industry standard. 
          <p className="text-lg text-[#6B7A5E] mt-4">
            Toggle the switch to see how Leafic stands apart from the typical plant care apps.
          </p>
        </h2>

        {/* Toggle Switch */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <button
            onClick={() => setIsLeaficOn(!isLeaficOn)}
            className={`w-16 h-8 rounded-full transition-colors flex items-center px-1 ${isLeaficOn ? "bg-[#E07A5F]" : "bg-[#2D4F1E]"}`}
          >
            <motion.div 
              className="w-6 h-6 bg-white rounded-full shadow-sm" 
              animate={{ x: isLeaficOn ? 32 : 0 }} 
              transition={{ type: "spring", stiffness: 400, damping: 25 }} 
            />
          </button>
          <span className="font-['Press_Start_2P'] text-[8px] uppercase tracking-widest text-[#2D4F1E]/60 transition-opacity duration-300">
            {isLeaficOn ? "Leafic Mode Active" : "Industry Standard"}
          </span>
        </div>

        {/* Table Container */}
        <div className="w-full border-2 border-[#2D4F1E] bg-white rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_#2D4F1E]/10">
          {DATA.map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b-2 border-[#2D4F1E] last:border-b-0 divide-x-2 divide-[#2D4F1E]">
              
              {/* Industry Standard (Fixed Column) */}
              <div className="p-5 text-left bg-white">
                <div className="text-[7px] uppercase tracking-widest text-[#2D4F1E]/40 mb-1.5 font-['Press_Start_2P']">
                  {row.label}
                </div>
                <div className="font-['Inter'] font-medium text-[#2D4F1E]/60 text-sm">
                  {row.them}
                </div>
              </div>

              {/* Leafic Reveal (Animated Column) */}
              <div className="relative flex items-center overflow-hidden">
                <AnimatePresence>
                  {isLeaficOn && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: i * 0.08, // Staggered bloom effect
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className="absolute inset-0 bg-[#2D4F1E] text-white p-5 text-left flex flex-col justify-center"
                    >
                      <div className="text-[7px] uppercase tracking-widest text-[#E07A5F] mb-1.5 font-['Press_Start_2P']">
                        {row.label}
                      </div>
                      <div className="font-['Inter'] font-bold text-sm whitespace-nowrap">
                        {row.us}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}