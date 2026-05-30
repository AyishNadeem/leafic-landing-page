"use client"

import { PixelPlant } from "./pixel-plant"

const GARDEN_FEATURES = [
  { 
    title: "Full Diagnosis", 
    caption: "Get a specific diagnosis for your plant's unique situation, not just generic care tips.",
    shape: "monstera"
  },
  { 
    title: "Quick Identify", 
    caption: "Instant naming at the garden center or on a walk. Point, tap, and you’re done.", 
    shape: "geranium" 
  },
  { 
    title: "Living Journal", 
    caption: "Track progress over time. Re-diagnose to see growth and get updated advice.", 
    shape: "cactus" 
  },
  { 
    title: "Climate-Aware", 
    caption: "Advice that changes with the seasons and your local climate, so your care is always on point.", 
    shape: "basil" 
  },
]

export function GardenSection() {
  return (
    <section id="features" className="bg-[#F9F7F2] py-24 border-t border-[#2D4F1E]/10">
      <div className="mx-auto max-w-5xl px-6">
        {/* The "Why" Header */}
        <div className="mb-20">
          <p className="font-['Press_Start_2P'] text-[8px] uppercase tracking-[0.2em] text-[#B08360] mb-4">
            How Leafic Works
          </p>
          <h2 className="font-['Fraunces'] text-4xl text-[#2D4F1E] mb-6">
            Real diagnosis, honest answers.
          </h2>
          <p className="max-w-2xl text-[#6B7A5E] leading-relaxed text-lg">
            Leafic doesn't give generic care cards. We use AI to provide a diagnosis for <em>your</em> specific plant, in <em>your</em> climate, at <em>this</em> time of year. 
          </p>
        </div>

        {/* The "How" Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {GARDEN_FEATURES.map((f) => (
            <div
              key={f.title}
              className="group border border-[#2D4F1E]/10 bg-white p-6 shadow-[2px_2px_0px_0px_#2D4F1E] hover:shadow-[6px_6px_0px_0px_#E07A5F] transition-all"
            >
              <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                <PixelPlant shape={f.shape} unit={8} />
              </div>
              <h3 className="font-['Fraunces'] text-lg text-[#2D4F1E] mb-2">{f.title}</h3>
              <p className="font-['Inter'] text-[10px] text-[#2D4F1E]/60 leading-relaxed">
                {f.caption}
              </p>
            </div>
          ))}
        </div>

        {/* The "Manifesto" Footer */}
      </div>
    </section>
  )
}