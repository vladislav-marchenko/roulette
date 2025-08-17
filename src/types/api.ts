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
  referralCode: string
}

export interface Prize {
  _id: string
  code: string
  name: string
  price: number
  image: string
  lottie: string
}

export interface Reward {
  _id: string
  prizeCode: string
  user: string
  prize: Prize
  createdAt: string
}

export interface RewardsResponse {
  rewards: Reward[]
  hasNext: boolean
}

export interface Task {
  _id: string
  code: string
  type: 'one_time' | 'daily'
  title: string
  reward: number
  url?: string
  isCompleted: boolean
  isClaimed: boolean
}

export interface TaskAction {
  taskCode: string
  type: 'completed' | 'claimed'
  user: string
}

export interface Action {
  _id: string
  type: 'deposit' | 'withdraw' | 'sell' | 'spin'
  status: 'pending' | 'success' | 'failed'
  amount: number
  user: string
  invoiceLink?: string
  prize?: Prize
  createdAt: string
}

export interface ActionsResponse {
  actions: Action[]
  hasNext: boolean
}
