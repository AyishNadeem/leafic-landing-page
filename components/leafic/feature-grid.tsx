"use client"

export function FeatureGrid() {
  return (
    <section className="bg-white py-24 border-t border-[#2D4F1E]/10">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-['Fraunces'] text-3xl text-[#2D4F1E] mb-8">
          Why we built Leafic.
        </h2>
        <p className="text-[#6B7A5E] leading-relaxed mb-8">
          We wanted a plant app that felt like a tool, not a trap. No "engagement" metrics, no data mining, and no aggressive paywalls. Just a quiet, helpful assistant for the plants we care about. 
        </p>
        <div className="inline-block border-2 border-[#2D4F1E] px-6 py-3 font-['Press_Start_2P'] text-[8px] uppercase tracking-widest text-[#2D4F1E]">
          Mehad Nadeem & Ayish Nadeem - Team Leafic
        </div>
      </div>
    </section>
  )
}