"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Capsule } from "@/lib/types"
import { useCapsules } from "@/hooks/use-capsules"

export function CapsuleCard({ capsule }: { capsule: Capsule }) {
  const { removeCapsule, shareCapsule } = useCapsules()
  const now = Date.now()
  const locked = typeof capsule.unlockAt === "number" && capsule.unlockAt > now

  return (
    <Card className="rounded-xl">
      <CardContent className="p-5 grid gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-medium text-lg">{capsule.title}</h3>
          {locked ? (
            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              Locked until {new Date(capsule.unlockAt!).toLocaleDateString()}
            </span>
          ) : (
            <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">Open</span>
          )}
        </div>

        {capsule.image && (
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <Image src={capsule.image || "/placeholder.svg"} alt="Capsule photo" fill className="object-cover" />
          </div>
        )}

        {capsule.note && !locked && <p className="text-sm leading-relaxed text-muted-foreground">{capsule.note}</p>}

        {capsule.audio && !locked && (
          <audio controls className="w-full">
            <source src={capsule.audio} />
            Your browser does not support the audio element.
          </audio>
        )}

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => shareCapsule(capsule)}>
            Share
          </Button>
          <Button variant="destructive" size="sm" onClick={() => removeCapsule(capsule.id)}>
            Delete
          </Button>
        </div>
        <p className="text-[11px] text-muted-foreground">Created {new Date(capsule.createdAt).toLocaleDateString()}</p>
      </CardContent>
    </Card>
  )
}
