export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground">
        <p className="leading-relaxed">
          © {new Date().getFullYear()} Memory Capsule. A place where memories live forever.
        </p>
      </div>
    </footer>
  )
}
