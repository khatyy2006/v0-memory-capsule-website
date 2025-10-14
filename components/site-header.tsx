"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useUser } from "@/hooks/use-capsules"

export function SiteHeader() {
  const { user, signIn, signOut } = useUser()

  return (
    <header className="w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Memory Capsule
          <span className="sr-only">Home</span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/about">
            About
          </Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/capsules">
            My Capsules
          </Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/capsules/create">
            Create
          </Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/support">
            Support
          </Link>
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Hi, {user.name}</span>
              <Button variant="outline" size="sm" onClick={signOut}>
                Sign out
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={signIn}>
              Sign in
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}
