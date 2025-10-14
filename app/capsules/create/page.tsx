"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreateCapsuleForm } from "@/components/create-capsule-form"

export default function CreateCapsulePage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container max-w-3xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance mb-2">Create a Capsule</h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Add photos, letters, or a voice note. Choose a date to unlock in the future, or keep it open now.
          </p>
          <CreateCapsuleForm />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
