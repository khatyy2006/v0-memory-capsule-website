"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCapsules } from "@/hooks/use-capsules"
import type { Capsule } from "@/lib/types"

export function CreateCapsuleForm() {
  const { addCapsule } = useCapsules()
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [unlockAt, setUnlockAt] = useState<string>("")
  const [imageData, setImageData] = useState<string | null>(null)
  const [audioData, setAudioData] = useState<string | null>(null)
  const imageInputRef = useRef<HTMLInputElement | null>(null)
  const audioInputRef = useRef<HTMLInputElement | null>(null)

  async function readAsDataURL(file: File) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const capsule: Capsule = {
      id: crypto.randomUUID(),
      title: title.trim() || "Untitled Capsule",
      note: note.trim(),
      image: imageData ?? undefined,
      audio: audioData ?? undefined,
      createdAt: Date.now(),
      unlockAt: unlockAt ? new Date(unlockAt).getTime() : undefined,
      shared: false,
    }
    addCapsule(capsule)
    setTitle("")
    setNote("")
    setUnlockAt("")
    setImageData(null)
    setAudioData(null)
    if (imageInputRef.current) imageInputRef.current.value = ""
    if (audioInputRef.current) audioInputRef.current.value = ""
  }

  return (
    <Card className="rounded-xl">
      <CardContent className="p-6">
        <form className="grid gap-5" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="A letter to my future self"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="note">Text Memory</Label>
            <Textarea
              id="note"
              placeholder="Write a note, letter, or reflection..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="min-h-32"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">Photo (optional)</Label>
            <Input
              ref={imageInputRef}
              id="image"
              type="file"
              accept="image/*"
              onChange={async (e) => {
                const f = e.target.files?.[0]
                if (f) setImageData(await readAsDataURL(f))
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="audio">Voice Note (optional)</Label>
            <Input
              ref={audioInputRef}
              id="audio"
              type="file"
              accept="audio/*"
              onChange={async (e) => {
                const f = e.target.files?.[0]
                if (f) setAudioData(await readAsDataURL(f))
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="unlock">Unlock Date (optional)</Label>
            <Input id="unlock" type="date" value={unlockAt} onChange={(e) => setUnlockAt(e.target.value)} />
            <p className="text-xs text-muted-foreground">Set a future date to time-lock your capsule.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit">Save Capsule</Button>
            <span className="text-xs text-muted-foreground">Stored locally for this demo</span>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
