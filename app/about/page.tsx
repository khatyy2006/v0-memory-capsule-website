"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[color-mix(in_oklab,var(--color-background)_85%,var(--color-primary)_15%)] to-[var(--color-background)]">
          <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-semibold text-balance mb-4">About Memory Capsule</h1>
            <p className="text-muted-foreground leading-relaxed">
              Memory Capsule is a warm, comforting space where your most precious moments can live forever. Store
              photos, letters, and voice notes. Create time-locked capsules to revisit future feelings, or privately
              share with loved ones when the time feels right.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card className="rounded-xl">
                <CardContent className="p-5">
                  <h3 className="font-medium text-lg mb-2">Our Purpose</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We help you save the moments that matter—big and small—so you can honor the past, enjoy the present,
                    and create beautiful surprises for the future.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-xl">
                <CardContent className="p-5">
                  <h3 className="font-medium text-lg mb-2">Our Promise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A gentle, modern experience that protects your memories and celebrates your story with care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
