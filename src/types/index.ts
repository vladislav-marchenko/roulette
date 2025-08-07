import type { FC } from 'react'
import type { IconType } from 'react-icons'

export interface Gift {
  id: number
  name: string
  price: number
  image: string
  lottie: unknown
}

export interface Task {
  title: string
  icon: IconType | FC<{ size?: number }>
  color?: string
  reward: number
}
