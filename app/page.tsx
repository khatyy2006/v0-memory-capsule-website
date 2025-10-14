"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <Hero />
        </section>

        <section className="py-12 md:py-16" aria-labelledby="features-heading">
          <div className="container max-w-5xl mx-auto px-4">
            <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold text-balance mb-6">
              Cherish memories with gentle, modern tools
            </h2>
            <FeatureCards />
            <div className="mt-8 flex items-center gap-3">
              <Button asChild>
                <Link href="/capsules/create">Create Your Capsule</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/capsules">My Capsules</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
