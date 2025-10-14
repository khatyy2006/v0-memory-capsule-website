"use client"

import useSWR, { mutate as globalMutate } from "swr"
import type { Capsule, UserProfile } from "@/lib/types"
import { getLocal, setLocal } from "@/lib/local-storage"

const CAPSULE_KEY = "mc_capsules_v1"
const USER_KEY = "mc_user_v1"

function getCapsules(): Capsule[] {
  return getLocal<Capsule[]>(CAPSULE_KEY) ?? []
}

function setCapsules(next: Capsule[]) {
  setLocal(CAPSULE_KEY, next)
  globalMutate(CAPSULE_KEY, next, false)
}

export function useCapsules() {
  const { data } = useSWR<Capsule[]>(CAPSULE_KEY, async () => getCapsules(), {
    fallbackData: [],
    revalidateOnFocus: false,
  })

  function addCapsule(c: Capsule) {
    const next = [c, ...getCapsules()]
    setCapsules(next)
  }
  function removeCapsule(id: string) {
    const next = getCapsules().filter((c) => c.id !== id)
    setCapsules(next)
  }
  function shareCapsule(c: Capsule) {
    // Local-only demo sharing: copy JSON to clipboard.
    const payload = JSON.stringify(c, null, 2)
    navigator.clipboard
      ?.writeText(payload)
      .catch(() => {})
      .finally(() => {
        // no-op for now; in a real app, generate a private link
        alert("Capsule JSON copied to clipboard (demo).")
      })
  }

  return {
    capsules: data ?? [],
    addCapsule,
    removeCapsule,
    shareCapsule,
  }
}

export function useUser() {
  const { data } = useSWR<UserProfile | null>(USER_KEY, async () => getLocal<UserProfile>(USER_KEY) ?? null, {
    fallbackData: null,
    revalidateOnFocus: false,
  })

  function signIn() {
    const name = prompt("Enter your name to personalize your dashboard:")
    if (!name) return
    const profile: UserProfile = { name }
    setLocal(USER_KEY, profile)
    globalMutate(USER_KEY, profile, false)
  }

  function signOut() {
    setLocal(USER_KEY, null)
    globalMutate(USER_KEY, null, false)
  }

  return {
    user: data,
    signIn,
    signOut,
  }
}
