"use client"

import { useCapsules } from "@/hooks/use-capsules"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CapsuleCard } from "@/components/capsule-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MyCapsulesPage() {
  const { capsules } = useCapsules()

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-semibold">My Capsules</h1>
            <Button asChild>
              <Link href="/capsules/create">New Capsule</Link>
            </Button>
          </div>
          {capsules.length === 0 ? (
            <p className="text-muted-foreground">No capsules yet. Start by creating one.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capsules.map((c) => (
                <CapsuleCard key={c.id} capsule={c} />
              ))}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
