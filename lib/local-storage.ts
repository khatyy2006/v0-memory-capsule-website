"use client"

export function getLocal<T = unknown>(key: string): T | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

export function setLocal<T = unknown>(key: string, value: T | null) {
  if (typeof window === "undefined") return
  try {
    if (value === null) {
      window.localStorage.removeItem(key)
    } else {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  } catch {
    // ignore quota/serialization errors in demo
  }
}
