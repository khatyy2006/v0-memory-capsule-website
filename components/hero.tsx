"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background with soft gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,var(--mc-hero-start),transparent_70%),radial-gradient(60%_60%_at_100%_20%,var(--mc-hero-end),transparent_70%)]"
      />
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-pretty animate-in fade-in slide-in-from-bottom-2">
            A place where memories live forever
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4">
            Save photos, letters, and voice notes in beautiful, time-locked capsules. Revisit when the time is right, or
            share privately with those you love.
          </p>
          <div className="mt-6 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-6">
            <Button asChild>
              <Link href="/capsules/create">Create Your Capsule</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
