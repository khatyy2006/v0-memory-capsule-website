export type Capsule = {
  id: string
  title: string
  note?: string
  image?: string
  audio?: string
  createdAt: number
  unlockAt?: number
  shared?: boolean
}

export type UserProfile = {
  name: string
}
