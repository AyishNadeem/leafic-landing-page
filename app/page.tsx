import { GardenSection } from "@/components/leafic/site-header"
import { Hero } from "@/components/leafic/hero"
import { FeatureGrid } from "@/components/leafic/feature-grid"
import { Comparison } from "@/components/leafic/comparison"
import { SiteFooter } from "@/components/leafic/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeatureGrid />
      <GardenSection />
      <Comparison />
      <SiteFooter />
    </main>
  )
}
