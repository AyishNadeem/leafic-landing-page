import Link from "next/link"
import { Twitter } from "lucide-react"
import { Logo } from "./logo"
import { PixelPlant } from "./pixel-plant"

const SOCIALS = [{ label: "X", href: "https://x.com/Ayish_Nadeem", icon: Twitter }]

export function SiteFooter() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-[#2D4F1E]">
      <div className="mx-auto w-full max-w-2xl px-4 text-center">
        <PixelPlant shape="flower" variant="terracotta" unit={6} className="mx-auto mb-8" />
        
        {/* Refined Heading */}
        <h2 className="font-['Fraunces'] text-4xl font-semibold tracking-tight text-foreground">
          Ready to grow your garden?
        </h2>
        <p className="mt-4 font-['Inter'] text-muted-foreground">
          Get Leafic on your phone and start nurturing your plants with confidence. 
        </p>
        
        {/* Refined CTA */}
        <a
          href="https://apps.apple.com/app/leafic/id6772236431"
          className="mt-10 inline-flex items-center gap-3 border-2 border-[#2D4F1E] bg-[#E07A5F] px-8 py-4 font-['Press_Start_2P'] text-[10px] text-white shadow-[6px_6px_0px_0px_#2D4F1E] transition-all hover:-translate-y-1 active:translate-y-1 active:shadow-none"
        >
          <span>DOWNLOAD LEAFIC</span>
        </a>
      </div>

      <div className="mx-auto mt-24 w-full max-w-6xl px-4 py-12 flex flex-col items-center justify-between gap-10 md:flex-row border-t border-[#2D4F1E]">
        <div className="flex flex-col items-center gap-4 md:items-start">
         {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className="border-2 border-[#2D4F1E] p-2 shadow-[2px_2px_0px_0px_#2D4F1E] hover:bg-[#E07A5F] transition-colors">
              <s.icon className="size-5" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-10">
          <Link href="/privacy" className="font-['Press_Start_2P'] text-[8px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}