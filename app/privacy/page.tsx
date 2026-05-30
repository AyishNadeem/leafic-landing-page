"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Shield, Leaf, Heart } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] text-[#2D4F1E]">
      <article className="mx-auto w-full max-w-2xl px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 font-['Press_Start_2P'] text-[8px] uppercase tracking-widest text-[#2D4F1E]/50 hover:text-[#2D4F1E]">
          <ArrowLeft className="size-3" /> Back home
        </Link>

        <h1 className="mt-8 font-['Fraunces'] text-4xl">Privacy Policy</h1>
        <p className="mt-2 font-['Press_Start_2P'] text-[8px] uppercase tracking-widest text-[#B08360]">
          Last updated: May 24, 2026
        </p>

        {/* Executive Summary */}
        <div className="mt-12 border-2 border-[#2D4F1E] bg-white p-8 shadow-[6px_6px_0px_0px_#2D4F1E]">
          <h3 className="font-['Press_Start_2P'] text-[9px] uppercase tracking-widest text-[#2D4F1E]/60 mb-4">The core promise</h3>
          <p className="text-sm leading-7 text-[#6B7A5E]">
            Leafic is designed with a simple philosophy: <strong>your data is yours.</strong> We don't have user accounts, we don't host servers, and we don't track your behavior. Everything you create in Leafic stays on your iPhone.
          </p>
        </div>

        {/* Simplified Policy Sections */}
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="font-['Fraunces'] text-2xl mb-4">Your Data, On Your Device</h2>
            <p className="text-sm leading-7 text-[#6B7A5E]">
              Leafic operates locally. Your plant journals, notes, photos, and history are stored exclusively within the app's secure sandbox on your iPhone. We have no backend servers, meaning we have no access to your data, and we do not perform cloud backups.
            </p>
          </section>

          <section>
            <h2 className="font-['Fraunces'] text-2xl mb-4">How Diagnosis Works</h2>
            <p className="text-sm leading-7 text-[#6B7A5E]">
              When you use our diagnosis feature, your photo is sent securely to Google’s Gemini API for processing. We use a paid tier that prohibits Google from retaining your images or using them to train their AI models. The photo is processed to provide a diagnosis and is immediately discarded.
            </p>
          </section>

          <section>
            <h2 className="font-['Fraunces'] text-2xl mb-4">What We Do Not Collect</h2>
            <ul className="grid gap-3 text-sm text-[#6B7A5E]">
              <li className="flex items-center gap-3"> <span className="text-[#E07A5F]">✕</span> No accounts or logins</li>
              <li className="flex items-center gap-3"> <span className="text-[#E07A5F]">✕</span> No analytics or telemetry</li>
              <li className="flex items-center gap-3"> <span className="text-[#E07A5F]">✕</span> No third-party ad tracking</li>
              <li className="flex items-center gap-3"> <span className="text-[#E07A5F]">✕</span> No personal identity collection</li>
            </ul>
          </section>

          <section>
            <h2 className="font-['Fraunces'] text-2xl mb-4">Your Rights</h2>
            <p className="text-sm leading-7 text-[#6B7A5E]">
              Because we do not store your data on remote servers, your privacy rights are absolute. You are the sole administrator of your data. Deleting the app from your device permanently deletes all content associated with your use of Leafic. There is no account to "close" or "delete" on our end.
            </p>
          </section>
        </div>

        {/* Contact Footer */}
        <div className="mt-20 border-t border-[#2D4F1E]/10 pt-10">
          <p className="text-sm text-[#2D4F1E]/60">
            Questions about this policy? Reach out directly to <a href="mailto:leafic@mehadnadeem.com" className="underline text-[#2D4F1E]">leafic@mehadnadeem.com</a>.
          </p>
        </div>
      </article>
    </main>
  )
}