export type Methods = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'

export interface User {
  id: number
  balance: number
  firstName: string
  lastName: string
  username: string
  isPremium: boolean
  photoUrl: string
  languageCode: string
}

export interface Prize {
  _id: string
  key: string
  name: string
  price: number
  image: string
  lottie: string
}

export interface Reward {
  _id: string
  prizeKey: string
  user: string
  prize: Prize
  createdAt: string
}

export interface RewardsResponse {
  rewards: Reward[]
  hasNext: boolean
}
