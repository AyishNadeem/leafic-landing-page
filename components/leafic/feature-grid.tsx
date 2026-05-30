import type { ReactNode } from "react"

const PROMISES = [
  {
    number: "01",
    title: "Privacy as a Foundation",
    body: "We built Leafic without a cloud backend. Your plant journals exist only on your device, keeping them entirely yours.",
    footer: "Zero data collection",
    icon: "shield",
  },
  {
    number: "02",
    title: "Sustainability for All",
    body: "We believe gardening is a fundamental joy. That’s why Leafic is free to use, without subscriptions or paywalls.",
    footer: "Open to everyone",
    icon: "gift",
  },
  {
    number: "03",
    title: "Human-Centric Design",
    body: "We skip the automated AI shortcuts. Every care tip is crafted by real people who care about plants as much as you do.",
    footer: "Real gardening advice",
    icon: "heart",
  },
]

function CardIcon({ icon }: { icon: string }) {
  const icons: Record<string, ReactNode> = {
    shield: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    gift: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
        <path d="M2 12h20" />
        <path d="M12 12V6" />
        <path d="M12 6c1.38-2.5 4-3 6-1.5 2 1.5 2 4 .5 5.5" />
        <path d="M12 6c-1.38-2.5-4-3-6-1.5C4 6 4 8.5 5.5 10" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7.5-4.5-10-10a5 5 0 0 1 8-5 5 5 0 0 1 8 5c-2.5 5.5-10 10-10 10z" />
      </svg>
    ),
  }

  return icons[icon] || null
}

export function FeatureGrid() {
  return (
    <section className="bg-[#F9F7F2] py-20 border-t border-[#2D4F1E] border-b border-[#2D4F1E]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 mb-16">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#B08360] font-['Press_Start_2P'] mb-4">
              Our Mission
            </p>
            <h2 className="mt-4 font-['Fraunces'] text-4xl text-[#2D4F1E]">
              Gardening, simplified.
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#6B7A5E]">
            We're building an app that respects your time, your data, and your plants. No corporate noise, just a quiet space for your green life.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PROMISES.map((promise) => (
            <div
              key={promise.number}
              className="group rounded-3xl border border-[#2D4F1E]/10 bg-white p-8 shadow-[4px_4px_0_0_#2D4F1E]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#B08360] font-['Press_Start_2P']">
                  {promise.number}
                </span>
                <div className="grid h-10 w-10 place-items-center bg-[#F9F7F2] border border-[#2D4F1E]/10 text-[#2D4F1E]">
                  <CardIcon icon={promise.icon} />
                </div>
              </div>
              <h3 className="mt-8 font-['Fraunces'] text-xl text-[#2D4F1E]">
                {promise.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#6B7A5E]">
                {promise.body}
              </p>
              <div className="mt-8 pt-4 border-t border-dashed border-[#2D4F1E]/10 text-[8px] uppercase tracking-[0.3em] text-[#8B9C74] font-['Press_Start_2P']">
                {promise.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
