import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Upload memories",
    desc: "Store photos, letters, and voice notes in one comforting place.",
  },
  {
    title: "Time-locked capsules",
    desc: "Pick a future date to unlock your capsule and relive the moment.",
  },
  {
    title: "Private sharing",
    desc: "Share a capsule privately with loved ones when you’re ready.",
  },
  {
    title: "Personal dashboard",
    desc: "See your open and locked capsules at a glance.",
  },
]

export function FeatureCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((f) => (
        <Card key={f.title} className="rounded-xl">
          <CardContent className="p-5">
            <h3 className="font-medium text-lg mb-1">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
