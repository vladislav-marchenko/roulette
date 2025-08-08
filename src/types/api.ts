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
  name: string
  price: number
  image: string
  lottie: string
}
